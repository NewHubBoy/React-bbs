import styled from 'styled-components';

const CardContainer = styled.div`
  min-width: 350px;
  min-height: 300px;
  margin-left: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px #ccc;
  border-radius: 6px;
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
