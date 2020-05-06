import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  > span {
    position: absolute;
    left: 6px;
  }
`;

export const Balls = styled.div`
  display: flex;
  margin: 12px 0;

  svg {
    margin: 0 10px;
    transition: fill 0.2s;

    &.active {
      fill: #e02041;
    }
  }
`;

export default Container;
