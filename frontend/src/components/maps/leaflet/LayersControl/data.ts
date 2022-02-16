import { ILayerItem } from './types';

export const layersTree: ILayerItem[] = [
  {
    key: 'Administrative Boundaries',
    label: 'Administrative Boundaries',
    on: false,
    nodes: [
      {
        key: 'currentEconomicRegions',
        label: 'Current Census Economic Regions',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_HUMAN_CULTURAL_ECONOMIC.CEN_ECONOMIC_REGIONS_SVW/ows?',
        layers: 'pub:WHSE_HUMAN_CULTURAL_ECONOMIC.CEN_ECONOMIC_REGIONS_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 0,
        id: 'currentEconomicRegions',
        color: '#bbdefb',
      },
      {
        key: 'moti',
        label: 'MOTI Regional Boundaries',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_ADMIN_BOUNDARIES.TADM_MOT_REGIONAL_BNDRY_POLY/ows?',
        layers: 'pub:WHSE_ADMIN_BOUNDARIES.TADM_MOT_REGIONAL_BNDRY_POLY',
        transparent: true,
        format: 'image/png',
        zIndex: 21,
        id: 'moti',
      },
      {
        key: 'municipalities',
        label: 'Municipalities',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_MUNICIPALITIES_SP',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_MUNICIPALITIES_SP/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 20,
        id: 'municipalityLayer',
        opacity: 0.5,
        color: '#b39ddb',
      },
      {
        key: 'regionalDistricts ',
        label: 'Regional Districts ',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 19,
        id: 'regionalDistricts',
        opacity: 0.5,
      },
    ],
  },
  {
    key: 'firstNations',
    label: 'First Nations',
    on: false,
    nodes: [
      {
        key: 'firstNationsReserves',
        label: 'First Nations reserves',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_ADMIN_BOUNDARIES.ADM_INDIAN_RESERVES_BANDS_SP/ows?',
        layers: 'pub:WHSE_ADMIN_BOUNDARIES.ADM_INDIAN_RESERVES_BANDS_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationsReserves',
        color: '#ebe0d7',
      },
      {
        key: 'firstNationTreatyAreas',
        label: 'First Nation Treaty Areas',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_AREA_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_AREA_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatyAreas',
      },
      {
        key: 'firstNationTreatyLands',
        label: 'First Nations Treaty Lands',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_LAND_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_LAND_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatyLands',
      },
      {
        key: 'firstNationTreatyRelatedLands',
        label: 'First Nations Treaty Related Lands',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_RELATED_LAND_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_RELATED_LAND_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatyRelatedLands',
      },
      {
        key: 'firstNationTreatySideAgreement',
        label: 'First Nation Treaty Side Agreements',
        on: false,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_SIDE_AGREEMENTS_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_SIDE_AGREEMENTS_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatySideAgreement',
        color: '#ffc5ae',
      },
    ],
  },
  {
    key: 'landOwnership',
    label: 'Land Ownership',
    on: false,
    nodes: [
      {
        key: 'crownLeases',
        label: 'Crown Leases',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_LEASES_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_LEASES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 7,
        id: 'crownLeases',
        opacity: 0.5,
        color: '#8dc2d5',
      },
      {
        key: 'crownInventory',
        label: 'Crown Inventory',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_INVENTORY_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_INVENTORY_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 6,
        id: 'crownInventory',
        opacity: 0.5,
        color: '#fcc1eb',
      },
      {
        key: 'crownInclusions',
        label: 'Crown Inclusions',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_INCLUSIONS_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_INCLUSIONS_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 5,
        id: 'crownInclusions',
        opacity: 0.5,
      },
      {
        key: 'crownLandLicenses',
        label: 'Crown Land Licenses',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_LICENSES_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_LICENSES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 5,
        id: 'crownLandLicenses',
        opacity: 0.5,
      },
      {
        key: 'crownTenures',
        label: 'Crown Tenures',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_TENURES_SVW/',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_TENURES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 5,
        id: 'crownTenures',
        opacity: 0.5,
      },
      {
        key: 'parcelBoundaries',
        label: 'Parcel Boundaries',
        on: true,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_CADASTRE.PMBC_PARCEL_FABRIC_POLY_SVW/ows?',
        layers: 'pub:WHSE_CADASTRE.PMBC_PARCEL_FABRIC_POLY_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 18,
        id: 'parcelLayer',
        color: '#ff9800',
      },
    ],
  },
  {
    key: 'zoning',
    label: 'Zoning',
    on: false,
    nodes: [
      {
        key: 'agriculturalLandReserveLines',
        label: 'Agricultural Land Reserve Lines',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.OATS_ALR_BOUNDARY_LINES_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.OATS_ALR_BOUNDARY_LINES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 4,
        id: 'agriculturalLandReserveLines',
        opacity: 0.5,
        color: '#00b300',
      },
    ],
  },
];
