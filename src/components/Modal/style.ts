import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled.div`
  background-color: #fff;
  width: 800px;
  height: 500px;

  .button {
    cursor: pointer;
    padding: 5px 10px;
    z-index: 10;
    color: blue;
  }
`;
