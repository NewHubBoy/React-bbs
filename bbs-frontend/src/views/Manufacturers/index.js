import styled from 'styled-components';
import PageContent from '../../components/PageContent';

import { useTranslation } from 'react-i18next';

const Manufacturers = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('manufacturers')}</PageContent>;
};

export default Manufacturers;
