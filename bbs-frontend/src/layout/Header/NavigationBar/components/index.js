import styled from 'styled-components';

import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Input, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import nav_list from './nav_list';
import { useEffect, useRef, useState } from 'react';

const { Search } = Input;

const NavListContainer = styled.ul`
  display: flex;
  list-style: none;
  & > a {
    padding: 0 20px;
    color: #fff;
  }
`;

const activeStyle = {
  color: '#333',
  background: '#ccc',
};

const NavList = () => {
  const { t, i18n } = useTranslation();
  return (
    <NavListContainer>
      {nav_list.map((item) => {
        return (
          <NavLink
            to={item.link}
            key={item.link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {t(item.tag)}
          </NavLink>
        );
      })}
    </NavListContainer>
  );
};

const LOGOContainer = styled.div`
  cursor: pointer;
`;

const LOGOText = styled.h2`
  font-size: 24px;
  color: #fff;
`;

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LOGOContainer>
      <LOGOText
        onClick={() => {
          navigate('/');
        }}
      >
        Report
      </LOGOText>
    </LOGOContainer>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button
      size="small"
      onClick={() => {
        navigate('/login', { replace: true });
      }}
    >
      {t('login')}
    </Button>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button
      size="small"
      onClick={() => {
        navigate('/register', { replace: true });
      }}
    >
      {t('register')}
    </Button>
  );
};

const User = () => {
  return (
    <Space direction="horizontal" align="center" size={'middle'}>
      <Login />
      <Register />
    </Space>
  );
};

const SearchContainer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const _Search = useRef(null);
  const [value, setValue] = useState('');

  const onSearch = (value) => {
    navigate(`/search?keyword=${value}`);
  };

  const hanldChange = () => {
    setValue(_Search.current.input.value);
  };

  useEffect(() => {
    if (location.pathname != '/search') {
      return setValue('');
    }
  }, [location]);
  return (
    <Search
      ref={_Search}
      placeholder={t('searchTips')}
      onSearch={onSearch}
      value={value}
      onChange={hanldChange}
      style={{
        width: 240,
      }}
    ></Search>
  );
};

const LaugaugeButton = () => {};

export {
  NavLink,
  NavList,
  Logo,
  Login,
  User,
  Register,
  SearchContainer,
  LaugaugeButton,
};
