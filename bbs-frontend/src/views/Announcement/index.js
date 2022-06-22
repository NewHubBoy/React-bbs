import styled from 'styled-components';
import PageContent from '../../components/PageContent';

import { useTranslation } from 'react-i18next';

const Announcement = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('announcement')}</PageContent>;
};

export default Announcement;
