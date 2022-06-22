import { Layout } from 'antd';
import Top from './Header';
import PageContainer from '../components/PageContainer';

import FooterContent from './Footer';

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
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
