import styled from 'styled-components';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  return <>{t('look.deep')}</>;
};

export default Home;
