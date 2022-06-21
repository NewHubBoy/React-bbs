import './App.css';
import Layout from './layout';

import { useTranslation } from 'react-i18next';

import './language/i18n.js';
function App() {
  const { t, i18n } = useTranslation();
  return <Layout>{t('look.deep')}</Layout>;
}

export default App;
