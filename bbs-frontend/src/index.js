import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';

import store from './store/index.js';
import { Provider } from 'react-redux';

import './mock/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ConfigProvider>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ConfigProvider>
  </Provider>
);
