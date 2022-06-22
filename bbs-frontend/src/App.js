import './App.css';
import Layout from './layout';
import './language/i18n.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageContent from './components/PageContent';
import GlobalStyle from './style/GlobalStyle';
import { lazy, Suspense } from 'react';
// import pages
const Home = lazy(() => import('./views/Home'));
const Report = lazy(() => import('./views/Report'));
const Login = lazy(() => import('./views/Login'));

// loading components
const Loading = () => {
  return <PageContent>loading...</PageContent>;
};

// default route
const NOTFUND = () => {
  return <div>404</div>;
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/report" element={<Report />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<NOTFUND />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
