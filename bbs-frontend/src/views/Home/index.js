import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import AnnouncenentCard from './components/AnnouncenentCard';
import { Fragment } from 'react';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <PageContent>{t('home')}</PageContent>
      <AnnouncenentCard>{t('announcement')}</AnnouncenentCard>
    </Fragment>
  );
};

export default Home;
