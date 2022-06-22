import styled from 'styled-components';
// import i18n from '../../../language/i18n';
import { useTranslation } from 'react-i18next';

import { Button, Space } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import {
  currentLanguage,
  setLanguage,
} from '../../../features/language/languageSlice';

import { NavList, SearchContainer, Logo, User } from './components';

const NavigationBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
      <Space direction="horizontal" align="center" size={'middle'}>
        <Logo />
        <NavList />
        <SearchContainer />
      </Space>
      <Space direction="horizontal" align="center" size={'middle'}>
        <Button onClick={changeLanguage} size="small">
          {t('changeLanguage')}
        </Button>
        <User />
      </Space>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
