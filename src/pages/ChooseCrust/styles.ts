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
    path {
      transition: stroke 0.2s;
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      svg {
        path {
          stroke: #e02041;
        }
      }
    `};
`;
export default Container;
