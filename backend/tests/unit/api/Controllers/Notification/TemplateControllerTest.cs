using Xunit;
using System.Diagnostics.CodeAnalysis;
using Pims.Dal;
using Pims.Dal.Security;
using Pims.Core.Test;
using Pims.Core.Comparers;
using Pims.Api.Areas.Notification.Controllers;
using Moq;
using Model = Pims.Api.Areas.Notification.Models.Template;
using Microsoft.AspNetCore.Mvc;
using MapsterMapper;
using System.Linq;
using System.Collections.Generic;
using Entity = Pims.Dal.Entities;

namespace Pims.Api.Test.Controllers
{
    [Trait("category", "unit")]
    [Trait("category", "api")]
    [Trait("group", "notifications")]
    [ExcludeFromCodeCoverage]
    public class TemplateControllerTest
    {
        #region Data
        #endregion

        #region Constructors
        public TemplateControllerTest()
        {
        }
        #endregion

        #region Tests
        #region GetNotificationTemplates
        [Fact]
        public void GetNotificationTemplates_Success()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.SystemAdmin);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var templates = EntityHelper.CreateNotificationTemplates(1, 10);
            service.Setup(m => m.NotificationTemplate.Get()).Returns(templates);

            // Act
            var result = controller.GetNotificationTemplates();

            // Assert
            var actionResult = Assert.IsType<JsonResult>(result);
            var actualResult = Assert.IsAssignableFrom<IEnumerable<Model.NotificationTemplateModel>>(actionResult.Value);
            Assert.Null(actionResult.StatusCode);
            Assert.Equal(mapper.Map<Model.NotificationTemplateModel[]>(templates), actualResult, new DeepPropertyCompare());
            service.Verify(m => m.NotificationTemplate.Get(), Times.Once());
        }

        #endregion

        #region GetNotificationTemplate
        [Fact]
        public void GetNotificationTemplate_Success()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.SystemAdmin);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var template = EntityHelper.CreateNotificationTemplate(1, "test");
            service.Setup(m => m.NotificationTemplate.Get(It.IsAny<int>())).Returns(template);

            // Act
            var result = controller.GetNotificationTemplate(template.Id);

            // Assert
            var actionResult = Assert.IsType<JsonResult>(result);
            var actualResult = Assert.IsType<Model.NotificationTemplateModel>(actionResult.Value);
            Assert.Null(actionResult.StatusCode);
            Assert.Equal(mapper.Map<Model.NotificationTemplateModel>(template), actualResult, new DeepPropertyCompare());
            service.Verify(m => m.NotificationTemplate.Get(template.Id), Times.Once());
        }

        [Fact]
        public void GetNotificationTemplate_Model()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.ProjectView);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var template = EntityHelper.CreateNotificationTemplate(1, "test");

            service.Setup(m => m.NotificationTemplate.Get(It.IsAny<int>())).Returns(template);

            // Act
            var result = controller.GetNotificationTemplate(template.Id);

            // Assert
            var actionResult = Assert.IsType<JsonResult>(result);
            Assert.Null(actionResult.StatusCode);
            var actualResult = Assert.IsType<Model.NotificationTemplateModel>(actionResult.Value);
            Assert.Equal(template.Name, actualResult.Name);
            Assert.Equal(template.Description, actualResult.Description);
            Assert.Equal(template.Audience, actualResult.Audience);
            Assert.Equal(template.To, actualResult.To);
            Assert.Equal(template.Cc, actualResult.Cc);
            Assert.Equal(template.Bcc, actualResult.Bcc);
            Assert.Equal(template.Encoding, actualResult.Encoding);
            Assert.Equal(template.BodyType, actualResult.BodyType);
            Assert.Equal(template.Subject, actualResult.Subject);
            Assert.Equal(template.Body, actualResult.Body);
            Assert.Equal(template.Tag, actualResult.Tag);
            Assert.Equal(template.IsDisabled, actualResult.IsDisabled);
            Assert.Equal(template.CreatedOn, actualResult.CreatedOn);
            Assert.Equal(template.UpdatedOn, actualResult.UpdatedOn);
            Assert.Equal(template.Status.Count(), actualResult.Status.Count());
        }
        #endregion

        #region AddNotificationTemplate
        [Fact]
        public void AddNotificationTemplate_Success()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.SystemAdmin);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var template = EntityHelper.CreateNotificationTemplate(1, "test");
            service.Setup(m => m.NotificationTemplate.Add(It.IsAny<Entity.NotificationTemplate>())).Returns(template);

            // Act
            var result = controller.AddNotificationTemplate(mapper.Map<Model.NotificationTemplateModel>(template));

            // Assert
            var actionResult = Assert.IsType<CreatedAtActionResult>(result);
            var actualResult = Assert.IsAssignableFrom<Model.NotificationTemplateModel>(actionResult.Value);
            Assert.Equal(201, actionResult.StatusCode);
            Assert.Equal(mapper.Map<Model.NotificationTemplateModel>(template), actualResult, new DeepPropertyCompare());
            service.Verify(m => m.NotificationTemplate.Add(It.IsAny<Entity.NotificationTemplate>()), Times.Once());
        }
        #endregion

        #region UpdateNotificationTemplate
        [Fact]
        public void UpdateNotificationTemplate_Success()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.SystemAdmin);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var template = EntityHelper.CreateNotificationTemplate(1, "test");
            service.Setup(m => m.NotificationTemplate.Update(It.IsAny<Entity.NotificationTemplate>())).Returns(template);

            // Act
            var result = controller.UpdateNotificationTemplate(mapper.Map<Model.NotificationTemplateModel>(template));

            // Assert
            var actionResult = Assert.IsType<JsonResult>(result);
            var actualResult = Assert.IsType<Model.NotificationTemplateModel>(actionResult.Value);
            Assert.Null(actionResult.StatusCode);
            Assert.Equal(mapper.Map<Model.NotificationTemplateModel>(template), actualResult, new DeepPropertyCompare());
            service.Verify(m => m.NotificationTemplate.Update(It.IsAny<Entity.NotificationTemplate>()), Times.Once());
        }
        #endregion

        #region DeleteNotificationTemplate
        [Fact]
        public void DeleteNotificationTemplate_Success()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.SystemAdmin);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var template = EntityHelper.CreateNotificationTemplate(1, "test");
            service.Setup(m => m.NotificationTemplate.Remove(It.IsAny<Entity.NotificationTemplate>()));

            // Act
            var result = controller.DeleteNotificationTemplate(mapper.Map<Model.NotificationTemplateModel>(template));

            // Assert
            var actionResult = Assert.IsType<JsonResult>(result);
            var actualResult = Assert.IsType<Model.NotificationTemplateModel>(actionResult.Value);
            Assert.Null(actionResult.StatusCode);
            Assert.Equal(mapper.Map<Model.NotificationTemplateModel>(template), actualResult, new DeepPropertyCompare());
            service.Verify(m => m.NotificationTemplate.Remove(It.IsAny<Entity.NotificationTemplate>()), Times.Once());
        }
        #endregion

        #region SendNotificationAsync
        [Fact]
        public async void SendNotificationAsync_Success()
        {
            // Arrange
            var helper = new TestHelper();
            var controller = helper.CreateController<TemplateController>(Permissions.SystemAdmin);

            var service = helper.GetService<Mock<IPimsService>>();
            var mapper = helper.GetService<IMapper>();
            var template = EntityHelper.CreateNotificationTemplate(1, "test");
            var notification = EntityHelper.CreateNotificationQueue(1, template);
            service.Setup(m => m.NotificationTemplate.SendNotificationAsync(It.IsAny<int>(), It.IsAny<string>(), It.IsAny<object>())).ReturnsAsync(notification);

            // Act
            var result = await controller.SendNotificationAsync(template.Id, "test@test.com");

            // Assert
            var actionResult = Assert.IsType<CreatedAtActionResult>(result);
            var actualResult = Assert.IsType<Areas.Notification.Models.Queue.NotificationQueueModel>(actionResult.Value);
            Assert.Equal(201, actionResult.StatusCode);
            Assert.Equal(mapper.Map<Areas.Notification.Models.Queue.NotificationQueueModel>(notification), actualResult, new DeepPropertyCompare());
            service.Verify(m => m.NotificationTemplate.SendNotificationAsync<object>(template.Id, "test@test.com", null), Times.Once());
        }
        #endregion
        #endregion
    }
}