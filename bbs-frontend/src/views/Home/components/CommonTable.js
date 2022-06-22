import styled from 'styled-components';

import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  font-weight: 600;
`;

const CommonTable = ({ data, loading, title }) => {
  const { t } = useTranslation();
  const Columns = [
    {
      title: t('CommonTable.title'),
      dataIndex: 'title',
      key: 'title',
      render: (_, { id }) => <Link to={`/detail/${id}`}>{_}</Link>,
      width: '100%',
      ellipsis: true,
      className: 'common-table-title',
    },
    {
      title: t('CommonTable.lv'),
      dataIndex: 'lv',
      key: 'lv',
      width: 70,
      align: 'center',
      className: 'common-table-lv',
    },
    {
      title: t('CommonTable.author'),
      dataIndex: 'author',
      key: 'author',
      width: 70,
      align: 'center',
      className: 'common-table-author',
    },
    {
      title: t('CommonTable.date'),
      dataIndex: 'date',
      key: 'date',
      width: 120,
      align: 'center',
      className: 'common-table-cell-date',
    },
  ];

  return (
    <TableContainer>
      <CardTitle>{title}</CardTitle>
      <Table
        columns={Columns}
        dataSource={data}
        pagination={false}
        loading={loading}
      />
    </TableContainer>
  );
};

export default CommonTable;
