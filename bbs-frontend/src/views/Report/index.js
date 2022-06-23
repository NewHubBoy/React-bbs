import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import CommonTable from '../../components/ReportTable';
import { getReportList } from '../../api/Report';

import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { useState, useEffect } from 'react';

const Report = () => {
  const { t, i18n } = useTranslation();

  const [tableData, setTableData] = useState([]);
  const [pageOptions, setPageOptions] = useState({
    total: 0,
    currentPage: 1,
    preSize: 10,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, total, currentPage, preSize } = await getReportList({
          page: 1,
          pageSize: 10,
        });
        setPageOptions({
          ...pageOptions,
          total,
          currentPage,
          preSize,
        });
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

  const hanldPageChange = (page, pageSize) => {
    setPageOptions({
      ...pageOptions,
      currentPage: page,
      pageSize,
    });
    setLoading(true);
    getReportList({
      page,
      pageSize,
    })
      .then(({ data, total, currentPage, preSize }) => {
        for (let i = 0; i < data.length; i++) {
          data[i].key = i;
        }
        setPageOptions({
          ...pageOptions,
          total,
          currentPage,
          preSize,
        });
        setTableData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <PageContent>
      <CommonTable
        data={tableData}
        loading={loading}
        pagination={{
          position: ['bottomLeft'],
          total: pageOptions.total,
          current: pageOptions.currentPage,
          pageSize: pageOptions.preSize,
          onChange: (page, pageSize) => {
            hanldPageChange(page, pageSize);
          },
        }}
      />
    </PageContent>
  );
};

export default Report;
