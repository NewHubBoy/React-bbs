import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PageContent from '../../components/PageContent';

const Register = () => {
  const { t, i18n } = useTranslation();
  return <PageContent>{t('register')}</PageContent>;
};

export default Register;
