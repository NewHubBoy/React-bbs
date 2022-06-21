import styled from 'styled-components';
// import i18n from '../../../language/i18n';
import { useTranslation } from 'react-i18next';

import { Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import {
  currentLanguage,
  setLanguage,
} from '../../../features/language/languageSlice';

const NavigationBarContainer = styled.div``;

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      dispatch(setLanguage('zh'));
    } else {
      dispatch(setLanguage('en'));
    }
  };

  return (
    <NavigationBarContainer>
      {t('key')}
      <Button onClick={changeLanguage}>{t('changeLanguage')}</Button>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
