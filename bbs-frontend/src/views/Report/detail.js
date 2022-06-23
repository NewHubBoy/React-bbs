import styled from 'styled-components';
import PageContent from '../../components/PageContent';
import { CardTitle } from '../../components/ReportTable';
import { ReportComment } from './components/ReportComment';
import { useParams } from 'react-router';
import { getReportDetail } from '../../api/Report';
import { useState, useEffect } from 'react';
import { message, Spin, Descriptions, Timeline } from 'antd';
import { HistoryOutlined, UserOutlined, FireOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const ReportDetailContainer = styled.div`
  padding-top: 10px;
  min-height: 500px;
  padding-bottom: 50px;
`;
const ReportTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 10px 0;
  margin-bottom: 20px;
`;

const ReportInfo = styled.div`
  display: flex;
  & > h3 {
    margin-right: 10px;
  }
`;

const DescriptionConent = styled.div`
  position: relative;
  padding: 10px;
  padding-left: 40px;
  min-height: 50px;
  margin-top: 20px;
  line-height: 1.7;
  letter-spacing: 2px;
  background-color: #f0f0f0;
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 5px;
    background-color: #ccc;
  }
`;

const CommentContainer = styled.div`
  padding: 10px;
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
                // if (key == '_id') return;
                return (
                  <Descriptions.Item
                    key={key}
                    label={t(`ReportDetail.abstractInfo.${key}`)}
                    labelStyle={{
                      fontSize: '14px',
                      fontWeight: '600',
                      paddingLeft: '40px',
                    }}
                    contentStyle={{
                      fontSize: '14px',
                    }}
                  >
                    {reportDetail.Abstract[key]}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
            <CardTitle>{t('ReportDetail.status')}</CardTitle>
            <Timeline className="report-timeline">
              {reportDetail.status.map((item, index) => {
                return (
                  <Timeline.Item
                    key={index}
                    color={item.status > 1 ? 'green' : 'gray'}
                  >
                    <div>
                      <span>{item.date}</span> <span>{item.status}</span>
                    </div>
                  </Timeline.Item>
                );
              })}
            </Timeline>
            <CardTitle>{t('ReportDetail.description')}</CardTitle>
            <DescriptionConent>{reportDetail.description}</DescriptionConent>
            <CardTitle>{t('ReportDetail.comment')}</CardTitle>
            <CommentContainer>
              <ReportComment />
            </CommentContainer>
          </ReportDetailContainer>
        )}
      </Spin>
    </PageContent>
  );
};
export default ReportDetail;
