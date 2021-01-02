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

export const ModalForm = styled.form`
  width: 800px;
  height: 560px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  background-color: rgb(225, 224, 224);
  z-index: 2;
  border-radius: 5px;

  .modal-title {
    display: flex;
    align-items: center;
    margin-top: 0px;
  }

  .modal-title span {  
    font-size: 20px;
    font-weight: 900;
    marginRight: '5px';
    color: rgb(223, 46, 48);
    margin: 10px 5px;
  }

  .title {
    font-family: 'Open Sans', sans-serif;
    margin: 20px 0 0;
    color: rgb(53, 51, 51);
    font-size: 16px;
    margin-top: 15px;
  }

  div {
    display: flex;
    align-self: flex-start !important;
    align-items: center;
    margin: 10px ;
  }

  button {
    font-family: 'Open Sans', cursive;
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background: rgb(0, 178, 51);
    padding: 8px 10px;
    font-size: 14px;
    cursor: pointer;
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
    &:hover {
      background: rgb(223, 65, 67);
    }
  }

  input {
    background: rgba(255, 255, 255, 0.5);
    color: #767676;
    font-size: 15px;
    border: 0;
    border-radius: 4px;
    resize: vertical;
    width: 90%;
    height: 32px;
    padding: 15px;
    margin: 10px;
    &:focus {
      border: 1px solid #1fcc6f;
    }

    ::placeholder {
      color: #c4c4c4;
    }
  }

  .title {
    align-self: flex-start ;
    margin-left: 45px;
  }

  textarea {
    background: rgba(255, 255, 255, 0.5);
    color: #767676;
    font-size: 14px;
    border: 0;
    border-radius: 4px;
    padding: 10px 15px 60px 10px;
    width: 90%;
    height: 200px;
    margin: 9px;
    resize: none;
    &:focus {
      border: 1px solid #c4c4c4;
      margin: 9px;
    }
    &::placeholder {
      color: #c4c4c4;
      font-size: 14px;
    }
  }
`;
