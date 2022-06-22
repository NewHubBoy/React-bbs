import styled from 'styled-components';
import PageContent from '../../components/PageContent';

import { useTranslation } from 'react-i18next';

const Report = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('report')}</PageContent>;
};

export default Report;
