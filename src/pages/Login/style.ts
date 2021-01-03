import styled from 'styled-components';

export const Container = styled.div`

  header div {
    width: 90vw;
    display: flex;
    align-items: center;
    margin: 10px auto;
  }

  .home-icon {
    font-size: 25px;
    margin: 0 5px 0 50px;
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
    width: 500px;
    padding: 10px 15px;
    margin-top: 10px;
    border-radius: 6px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }

  input:focus {
    background: #dedce1;
  }

  input::placeholder,
  br + input {
    margin-top: 6px;
  }

  button {
    margin: 20px 0;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }

  .account {
    text-align: center;
    align-items: center;
    width: 185px;
    margin-top: 30px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .account.icon {
    font-size: 16px;
  }

`;

