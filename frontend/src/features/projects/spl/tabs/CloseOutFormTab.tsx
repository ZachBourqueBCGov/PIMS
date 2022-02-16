import './CloseOutFormTab.scss';

import { FastCurrencyInput } from 'components/common/form';
import { ocgVarianceNote, ProjectNotes } from 'features/projects/common';
import { IProject } from 'features/projects/interfaces';
import { useFormikContext } from 'formik';
import * as React from 'react';
import { Col, Container, Form } from 'react-bootstrap';

import {
  CloseOutAdjustmentForm,
  CloseOutFinancialSummaryForm,
  CloseOutPurchaseInformationForm,
  CloseOutSaleInformationForm,
  CloseOutSignaturesForm,
  CloseOutSummaryForm,
} from '..';

interface ICloseOutFormTabProps {
  isReadOnly?: boolean;
}

/**
 * Close out form tab.
 * @param param0 ICloseOutFormTabProps
 */
const CloseOutFormTab: React.FunctionComponent<ICloseOutFormTabProps> = ({
  isReadOnly,
}: ICloseOutFormTabProps) => {
  const formikProps = useFormikContext<IProject>();
  return (
    <Container fluid>
      <CloseOutSummaryForm isReadOnly={isReadOnly} />
      <CloseOutPurchaseInformationForm isReadOnly={isReadOnly} />
      <CloseOutSaleInformationForm isReadOnly={isReadOnly} />
      <CloseOutFinancialSummaryForm isReadOnly={isReadOnly} />
      <h3>OCG</h3>
      <Form.Group>
        <Col>
          <Form.Group className="col-md-11 p-0">
            <Form.Label column md={2}>
              OCG Gain / Loss
            </Form.Label>
            <FastCurrencyInput
              formikProps={formikProps}
              disabled={isReadOnly}
              outerClassName="col-md-4"
              field="ocgFinancialStatement"
            />
          </Form.Group>
          <ProjectNotes
            field="salesHistoryNote"
            label="OCG Variance Notes"
            outerClassName="col-md-11"
            className="col-md-auto"
            disabled={isReadOnly}
            tooltip={ocgVarianceNote}
          />
        </Col>
      </Form.Group>
      <CloseOutSignaturesForm isReadOnly={isReadOnly} />
      <CloseOutAdjustmentForm isReadOnly={isReadOnly} />
    </Container>
  );
};

export default CloseOutFormTab;
