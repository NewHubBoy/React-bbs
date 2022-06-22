import styled from 'styled-components';
import PageContent from '../../components/PageContent';

import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('team')}</PageContent>;
};

export default Team;
