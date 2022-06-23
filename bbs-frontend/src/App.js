import './App.css';
import Layout from './layout';
import './language/i18n.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageContent from './components/PageContent';
import GlobalStyle from './style/GlobalStyle';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import { useSelector } from 'react-redux';
import { currentLanguage } from './features/language/languageSlice';
// import pages
const Home = lazy(() => import('./views/Home'));
const Report = lazy(() => import('./views/Report'));
const Manufacturers = lazy(() => import('./views/Manufacturers'));
const Team = lazy(() => import('./views/Team'));
const Author = lazy(() => import('./views/Author'));
const Announcement = lazy(() => import('./views/Announcement'));
const Login = lazy(() => import('./views/Login'));
const Register = lazy(() => import('./views/Register'));
const ReportDetail = lazy(() => import('./views/Report/detail'));

// search
const Search = lazy(() => import('./views/Search'));

// loading components
export const Loading = () => {
  return (
    <PageContent>
      <Spin delay={1000} />
    </PageContent>
  );
};

// default route
const NOTFUND = () => {
  return <div>404 NOT FOUND</div>;
};

function App() {
  const locale = useSelector(currentLanguage);
  return (
    <ConfigProvider locale={locale == 'zh' ? zhCN : enUS}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/report" element={<Report />}></Route>
              <Route
                path="/report/detail/:id"
                element={<ReportDetail />}
              ></Route>
              <Route path="/manufacturers" element={<Manufacturers />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/authorRanking" element={<Author />}></Route>
              <Route path="/announcement" element={<Announcement />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="*" element={<NOTFUND />}></Route>
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
