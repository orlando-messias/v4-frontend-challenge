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
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    font-size: 22px;
    font-weight: 900;
    marginRight: '5px';
    color: rgb(223, 46, 48);
    margin: 10px 5px 2px;
  }

  .title {
    font-family: 'Open Sans', sans-serif;
    margin: 20px 0 0;
    color: rgb(53, 51, 51);
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
    font-family: 'Open Sans', cursive;
    color: rgb(255, 255, 255);
    margin: 20px 0 0 20px;
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
    font-size: 18px;
  }

  .cancel {
    background: rgb(223, 46, 48);
    &:hover {
      background: rgb(255, 65, 67);
    }
  }

  input {
    font-family: 'Questrial', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    color: rgb(118, 118, 101);
    font-size: 18px;
    border: 0;
    border-radius: 4px;
    resize: vertical;
    width: 90%;
    height: 32px;
    padding: 15px;
    margin: 10px;

    ::placeholder {
      color: rgb(196, 196, 196);
    }
  }

  .title {
    align-self: flex-start ;
    margin-left: 45px;
  }

  textarea {
    font-family: 'Questrial', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    color: rgb(118, 118, 118);
    font-size: 18px;
    border: 0;
    border-radius: 4px;
    padding: 10px 15px 60px 10px;
    width: 90%;
    height: 200px;
    margin: 9px;
    resize: none;
    &::placeholder {
      color: rgb(196, 196, 196);
    }
  }
`;
