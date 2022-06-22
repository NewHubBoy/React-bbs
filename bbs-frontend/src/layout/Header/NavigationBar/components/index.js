import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import nav_list from './nav_list';

const LinkContent = styled.li`
  display: block;
  text-align: center;
  height: 100%;
  width: 80px;
  & > a {
    height: 100%;
    width: 100%;
    color: #fff;
    :hover {
      color: red;
    }
  }
`;

const NavLink = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <LinkContent>
      <Link to={props.link}>{t(props.tag)}</Link>
    </LinkContent>
  );
};

const NavListContainer = styled.ul`
  display: flex;
  list-style: none;
`;

const NavList = () => {
  return (
    <NavListContainer>
      {nav_list.map((item) => {
        return (
          <NavLink
            name={item.name}
            link={item.link}
            tag={item.tag}
            key={item.link}
          />
        );
      })}
    </NavListContainer>
  );
};

const Logo = () => {};

const Login = () => {};

const Search = () => {};

const LaugaugeButton = () => {};

export { NavLink, NavList, Logo, Login, Search, LaugaugeButton };
