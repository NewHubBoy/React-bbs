import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  & > a {
    color: #40a9ff;
  }
`;

const FooterContent = () => {
  return (
    <FooterContainer>
      2022©<Link to={'/'}>Report</Link>All rights reserved
    </FooterContainer>
  );
};

export default FooterContent;
