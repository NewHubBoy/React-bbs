import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import AnnouncenentCard from './components/AnnouncenentCard';
import CommonTable from '../../components/CommonTable';
import { Fragment } from 'react';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <PageContent>
        <CommonTable></CommonTable>
      </PageContent>
      <AnnouncenentCard>{t('announcement')}</AnnouncenentCard>
    </Fragment>
  );
};

export default Home;
