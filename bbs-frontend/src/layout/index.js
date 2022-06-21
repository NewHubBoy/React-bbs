import { Layout } from 'antd';
import Top from './Header';
import PageContainer from '../components/PageContainer';

const { Header, Content, Footer } = Layout;

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Top />
      </Header>
      <Content>
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default LayoutComponent;
