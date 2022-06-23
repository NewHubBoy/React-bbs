import styled from 'styled-components';

import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const TableContainer = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
`;

export const CardTitle = styled.div`
  position: relative;
  font-size: 24px;
  margin-top: 20px;
  font-weight: 600;
  padding-left: 14px;
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 5px;
    background-color: #40a9ff;
  }
`;

const CommonTable = ({ data, loading, title, pagination }) => {
  const { t } = useTranslation();
  const Columns = [
    {
      title: t('CommonTable.title'),
      dataIndex: 'title',
      key: 'title',
      render: (_, { id }) => <Link to={`/report/detail/${id}`}>{_}</Link>,
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
      {title ? <CardTitle>{title}</CardTitle> : null}
      <Table
        columns={Columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        className="common-table"
      />
    </TableContainer>
  );
};

export default CommonTable;
