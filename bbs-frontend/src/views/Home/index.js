import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import AnnouncenentCard from './components/AnnouncenentCard';
import CommonTable from '../../components/ReportTable';
import { Fragment, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { GetTable } from '../../api/Home';
import { message } from 'antd';

const Home = () => {
  const { t, i18n } = useTranslation();

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, total, currentPage, preSize } = await GetTable();
        console.log(data, total, currentPage, preSize);
        for (let i = 0; i < data.length; i++) {
          data[i].key = i;
        }
        setTableData(data);
      } catch (_error) {
        setError(_error);
        message.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <PageContent>
        <CommonTable
          data={tableData}
          loading={loading}
          title={t('commonTitle.commit')}
          pagination={false}
        />
        <CommonTable
          data={tableData}
          loading={loading}
          title={t('commonTitle.confirm')}
          pagination={false}
        />
        <CommonTable
          data={tableData}
          loading={loading}
          title={t('commonTitle.public')}
          pagination={false}
        />
      </PageContent>
      <AnnouncenentCard>{t('announcement')}</AnnouncenentCard>
    </Fragment>
  );
};

export default Home;
