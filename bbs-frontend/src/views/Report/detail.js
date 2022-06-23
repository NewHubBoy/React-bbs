import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import { CardTitle } from '../../components/ReportTable';
import { useParams } from 'react-router';
import { getReportDetail } from '../../api/Report';
import { useState, useEffect } from 'react';
import { message, Spin, Descriptions } from 'antd';
import { HistoryOutlined, UserOutlined, FireOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const ReportDetailContainer = styled.div`
  padding-top: 10px;
  min-height: 500px;
`;
const ReportTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 10px 0;
`;

const ReportInfo = styled.div`
  display: flex;
  & > h3 {
    margin-right: 10px;
  }
`;

const ReportDetail = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [reportDetail, setReportDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const { data } = await getReportDetail(id);
      console.log(data);
      setReportDetail(data);
    } catch (_error) {
      setError(_error);
      message.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData({
      id,
    });
  }, []);

  return (
    <PageContent>
      <Spin spinning={loading}>
        {loading ? (
          <ReportDetailContainer />
        ) : (
          <ReportDetailContainer>
            <ReportTitle>{reportDetail.title}</ReportTitle>
            <ReportInfo>
              <h3>
                <HistoryOutlined /> {reportDetail.date}
              </h3>
              <h3>
                <UserOutlined /> {reportDetail.author}
              </h3>
              <h3>
                <FireOutlined /> {reportDetail.hots}
              </h3>
            </ReportInfo>
            <Descriptions
              title={<CardTitle>{t('ReportDetail.abstract ')}</CardTitle>}
              column={1}
              size={'small'}
            >
              {Object.keys(reportDetail.Abstract).map((key) => {
                if (key == '_id') return;
                return (
                  <Descriptions.Item
                    label={t(key)}
                    labelStyle={{
                      fontSize: '18px',
                      fontWeight: '600',
                      paddingLeft: '40px',
                    }}
                    contentStyle={{
                      fontSize: '18px',
                    }}
                  >
                    {reportDetail.Abstract[key]}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </ReportDetailContainer>
        )}
      </Spin>
    </PageContent>
  );
};
export default ReportDetail;
