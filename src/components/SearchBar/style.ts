import styled from 'styled-components';

  export const Container = styled.div`
  display: flex;
  justify-content: space-between ;
  width: 100%;

  #faSearch {
      color: #f26532;
      width: auto;
      background: rgba(0, 0, 0, 0.15);
      height: 35px;
      padding: 0 15px;
      min-width: fit-content;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 5px;
    }

  .inputs {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 15px;
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

    @media(max-width: 650px ){
      display: block;
      margin-left: 0;

      .searchBar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      button { margin: 6px 12px; padding: 5px 8px; }

      .searchCheckContainer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: auto;
        margin-top: 15px;
        align-items: center;
      }
      
      // .searchCheck {
      //   margin: unset;
      // }

      .spanCheck {
        font-size: 16px;
      }
    }
  }

  .searchCheck {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 10px;
    width: 100%;
  }

  .spanCheck {
    font-size: 20px;
    cursor: pointer;
  }

  .profile{
    display: flex;
    align-self: flex-start;
    text-align: right;
    margin-left: auto;
    place-items: center;

    .profileName {
      margin-right: 12px;
      }

    a {
      text-decoration: none;
      font-size: 18px;
      color: #f26532;
      font-weight: bold;
      display:block;

      &:hover {
        color: #f04b0f;
      }
      &:active {
        color: #c03c0c;
      }
    }
  }

`;

export const CheckBoxInput = styled.input`
  min-width: 18px;
  min-height: 18px;
  margin-right: 8px;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  display: block;
  height: 35px;
  margin: 0 ;
  padding-left: 10px;
  background: rgba(0, 0, 0, 0.15);
  font-size: 20px;
  color: #fff;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media(max-width: 650px ){
    width: 100%;
  }

`;

export const AddButton = styled.button`
  display: flex;
  width: 120px;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #0aaf57;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #179b55;
  }

  .plusIcon {
    color: #fff;
    size: 18px;
  }

  span {
    color: #fff;
    text-align: center;
    font-weight: bold;
    margin-left: 10px;
  }

`;
