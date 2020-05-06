import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #e02041;
  height: 56px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 100%;
  max-width: 328px;
  font-weight: 500;
  margin: 16px 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#e02041')};
  }

  &:disabled {
    cursor: not-allowed;
    background: #9f9f9f;
  }
`;
