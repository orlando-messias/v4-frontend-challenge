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
`;

export const ModalDialog = styled.form`
  width: 600px;
  height: 200px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(225, 224, 224);
  z-index: 2;
  border-radius: 5px;
  position: relative;
  top: 80px;

  .modal-title {
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    font-size: 22px;
    display: flex;
    align-items: center;
    color: rgb(223, 46, 48);
  }

  .modal-title .icon {
    font-size: 26px;
    margin-top: 5px;
  }

  .modal-title span {
    font-family: 'Bebas Neue', cursive;
    margin: 7px 3px;
    font-weight: 900;
  }

  .title {
    font-family: 'Open Sans', sans-serif;
    color: rgb(53, 51, 51);
    font-size: 16px;
    margin-top: 10px;
    align-self: flex-start ;
    margin-left: 40px;
  }

  div {
    display: flex;
    align-self: flex-start !important;
    align-items: center;
  }

  button {
    font-family: 'Open Sans', cursive;
    color: rgb(255, 255, 255);
    margin: 5px 0 10px 20px;
    padding: 7px 15px;
    display: flex;
    align-items: center;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: rgb(0, 178, 51);
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: rgb(29, 187, 29);
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin: 0 5px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-self: flex-end !important ;
    margin: 20px 20px 10px;
  }

  button .icon {
    font-size: 20px;
  }

  button.cancel {
    background: rgb(223, 46, 48);
    &:hover {
      background: rgb(255, 65, 67);
    }
  }

`;
