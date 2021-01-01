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
  padding: 10px 20px;
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  background-color: rgb(236, 236, 236);
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
    color: #f26532;
    margin: 10px 5px;
  }

  .title {
    margin: 20px 0 0;
    color: #000000;
    font-size: 18px;
    margin-top: 15px;
  }

  div {
    display: flex;
    align-self: flex-start !important;
    align-items: center;
    margin: 10px ;
  }

  button {
    align-self: flex-end;
    margin : 20px 45px 40px;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #1fcc6f;
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
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-self: flex-end !important ;
    margin: 20px 20px 10px;
  }

  .button {
    background: #0aaf57;
    margin-bottom: 8px;
    margin-left: 20px;
    margin-right: 0;
    font-size: 14px;
    padding: 8px 15px;
    cursor: pointer;
    &:hover {
      background: #179b55;
    }
  }

  .button.cancel {
    background: rgb(223, 46, 48);
    &:hover {
      background: rgb(223, 65, 67);
    }
  }

  input {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
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
  }

  .title {
    align-self: flex-start ;
    margin-left: 45px;
  }

  h3 {
    font-size: 23px;
    margin-top: 20px;
    color: #fff;
  }

  
  textarea {
    background: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px 15px 60px 10px;
    width: 90%;
    height: 200px;
    margin: 9px;
    resize: none;
    &:focus {
      border: 1px solid #1fcc6f;
      margin: 9px;
    }
    &::placeholder {
      font-size: 14px;
    }
  }
`;
