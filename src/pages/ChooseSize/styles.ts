import styled, { css } from 'styled-components';

const Container = styled.div`
  a > button {
    display: flex;
    justify-content: space-between;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Option = styled.div<{ selected: boolean }>`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 6px;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    circle,
    line {
      transition: stroke 0.1s;
    }

    path {
      transition: fill stroke 0.1s;
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      svg {
        circle,
        line {
          stroke: #e02041;
        }

        path {
          fill: #e02041;
          stroke: #e02041;
        }
      }
    `};
`;

export default Container;
