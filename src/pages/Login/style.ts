import styled from 'styled-components';

export const Container = styled.div`

  header div {
    color: rgb(53, 51, 51);
    width: 90vw;
    display: flex;
    align-items: center;
    margin: 15px auto;
  }

  .home-icon {
    font-size: 25px;
    margin: 0 5px 0 100px;
  }

  @media(max-width: 760px ){
    header div {
      width: 100vw;
    }

    .home-icon {
      margin: 0 5px 0 30px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  input {
    font-family: 'Questrial', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    color: rgb(118, 118, 101);
    font-size: 18px;
    border-radius: 4px;
    resize: vertical;
    height: 32px;
    width: 500px;
    padding: 10px 15px;
    margin-top: 5px;
    border: none;

    ::placeholder {
      color: rgb(196, 196, 196);
    }
    input:focus {
      background: rgb(29, 187, 29);
    }
  }

  button {
    font-family: 'Open Sans', cursive;
    color: rgb(255, 255, 255);
    padding: 7px 15px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: rgb(0, 178, 51);
    margin: 20px 0;
    font-size: 14px;
    text-align: center;
    width: 300px;
    cursor: pointer;

    &:hover {
      background: rgb(29, 187, 29);
    }
    &:disabled {
      background: rgb(170, 170, 170);
      cursor: not-allowed;
      color: rgb(128, 128, 128);
    }
  }

  .account-link {
    margin-top: 30px;
  }

  .account {
    text-align: center;
    color: rgb(0, 0, 255);
    align-items: center;
    width: 185px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .account.icon {
    font-size: 16px;
  }

`;

