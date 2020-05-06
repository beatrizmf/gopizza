import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  width: 100%;
  background: #e02041;
  padding: 16px;

  svg {
    height: 32px;
    margin: 0 8px;
  }

  h1 {
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 26px;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
`;

export default Container;
