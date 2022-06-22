import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('login')}</PageContent>;
};

export default LoginPage;
