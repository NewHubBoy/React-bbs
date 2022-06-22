import styled from 'styled-components';
import PageContent from '../../components/PageContent';

import { useTranslation } from 'react-i18next';

const Author = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('authorRanking')}</PageContent>;
};

export default Author;
