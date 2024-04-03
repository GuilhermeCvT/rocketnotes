import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  'header'
  'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    margin-top: 40px;
    margin-bottom: 50px;
    padding: 0 200px;

    header a {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 5px;

      color: ${({theme}) => theme.COLORS.PRIMARY};

      width: 5%;
    }
  }

  .inputs-text {
    display: flex;
    gap: 30px;
  }

  textarea {
    margin-top: 25px;
  }
`

export const Form = styled.form`
  width: 100%;

  h2:nth-child(2) {
    font-size: 20px;
    font-weight: 300;
    margin-top: -40px;
    margin-bottom: 0px;
    color: ${({theme}) => theme.COLORS.TEXT};
  }

  .MovieItens {
    display: flex;
    align-items: center;
    text-align: start;
    gap: 20px;
    
    width: 100%;
    padding: 16px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 10px;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }
`