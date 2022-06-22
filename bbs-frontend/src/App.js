import './App.css';
import Layout from './layout';
import './language/i18n.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./views/Home'));
const Loading = () => {
  return <div>loading...</div>;
};

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
            <Route path="*" element={<NOTFUND />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
