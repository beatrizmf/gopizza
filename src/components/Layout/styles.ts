import styled from 'styled-components';

const Container = styled.div`
  main {
    width: 100%;
    height: calc(100vh - 110px);
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin: auto;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      height: 100%;
      place-content: space-between;
    }

    h2 {
      font-size: 26px;
    }

    a.button {
      width: 100%;
      display: flex;
      justify-content: center;
      max-width: 328px;
    }
  }
`;

export const Nav = styled.div``;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Container;
