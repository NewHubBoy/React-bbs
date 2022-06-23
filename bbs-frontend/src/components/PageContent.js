import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb, Layout, PageHeader, PageHeaderBreadcrumb } from 'antd';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 161px);
  max-width: 1200px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px #ccc;
  border-radius: 6px;
`;

const PageContent = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const breadcrumbNameMap = {
    '/': t('home'),
    '/report': t('breadcrumb.report'),
    '/report/detail': t('breadcrumb.detail'),
    '/manufacturers': t('breadcrumb.manufacturers'),
    '/team': t('breadcrumb.team'),
    '/authorRanking': t('breadcrumb.authorRanking'),
    '/announcement': t('breadcrumb.announcement'),
    '/login': t('breadcrumb.login'),
    '/register': t('breadcrumb.register'),
    '/search': t('breadcrumb.search'),
  };
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const _nextUrl = `/${pathSnippets.slice(0, index + 2).join('/')}`;
    if (!breadcrumbNameMap[url]) {
      return null;
    }
    if (!breadcrumbNameMap[_nextUrl]) {
      return (
        <Breadcrumb.Item key={url}>{breadcrumbNameMap[url]}</Breadcrumb.Item>
      );
    }
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">{t('home')}</Link>
    </Breadcrumb.Item>,
    ...extraBreadcrumbItems,
  ];

  return (
    <Content>
      {pathSnippets.length > 0 ? (
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      ) : null}
      {children}
    </Content>
  );
};

export default PageContent;
