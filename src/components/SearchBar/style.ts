import styled from 'styled-components';

  export const Container = styled.div`
  display: flex;
  justify-content: space-between ;
  width: 100%;

  #faSearch {
    color: rgb(223, 46, 48);
    width: auto;
    background: rgba(255, 255, 255, 0.5);
    height: 35px;
    padding: 0 15px;
    min-width: fit-content;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 5px;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
    align-items: center;

    .searchBar{ display: contents; }

    .searchCheckContainer {
      display: contents;
      width: 100%;
      justify-content: space-between;
      margin: auto;
      margin-top: 15px;
      align-items: center;
    }

    @media(max-width: 600px ){
      display: block;
      margin-left: 0;

      .searchBar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      button { margin: 6px 12px; padding: 6px 8px; }

      .searchCheckContainer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: auto;
        margin-top: 15px;
        align-items: center;
      }
      
    }
  }

  .searchCheck {
    font-family: 'Open Sans', cursive;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 10px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

`;

export const CheckBoxInput = styled.input`
  min-width: 18px;
  min-height: 18px;
  margin-right: 8px;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  font-family: 'Questrial', sans-serif;
  display: block;
  height: 35px;
  margin: 0 ;
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  color: rgb(118, 118, 101);
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  ::placeholder {
    color: rgb(196, 196, 196);
  }
  
  @media(max-width: 600px ){
    width: 100%;
  }

`;

export const AddButton = styled.button`
  font-family: 'Open Sans', cursive;
  display: flex;
  justify-content: center;
  width: 120px;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: rgb(0, 178, 51);
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgb(29, 187, 29);
  }

  .plusIcon {
    color: rgb(255, 255, 255);
    size: 18px;
  }

  span {
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: bold;
    margin-left: 10px;
  }

`;
