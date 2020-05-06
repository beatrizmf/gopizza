import styled from 'styled-components';

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > p {
    margin-top: 8px;
  }

  a > button {
    display: flex;
    justify-content: space-between;
  }
`;

export const Options = styled.ul`
  padding: 26px;
  list-style: none;
  width: 100%;

  hr {
    margin: 8px 0;
  }
`;

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    font-weight: 600;

    svg {
      margin-right: 8px;
    }
  }

  > div {
    display: flex;
    align-items: center;

    span {
      margin: 0 8px;
    }
  }
`;

export const ControlButton = styled.button`
  background: #ffb8c4;
  border: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e02041;
  border-radius: 5px;
`;

export default Container;
