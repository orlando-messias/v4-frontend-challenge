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
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    margin-top: 0px;
  }

  .modal-title .icon {
    font-size: 24px;
    margin-top: 5px;
  }

  .modal-title span {  
    font-size: 20px;
    font-weight: 900;
    marginRight: '5px';
    color: rgb(223, 46, 48);
    margin: 7px 5px;
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
    align-self: flex-end;
    margin : 10px 45px 40px;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background-color: #fff;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    &:hover {
      background: #179b55;
    }
    &:active {
      background: #148549;
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

  .button {
    font-family: 'Open Sans', cursive;
    background: rgb(0, 178, 51);
    margin-bottom: 8px;
    margin-left: 20px;
    margin-right: 0;
    font-size: 14px;
    padding: 7px 15px;
    cursor: pointer;
    &:hover {
      background: #179b55;
    }
  }

  .button .icon {
    font-size: 20px;
  }

  .button.cancel {
    background: rgb(223, 46, 48);
    padding-top: 6px;
    &:hover {
      background: rgb(223, 65, 67);
    }
  }

`;
