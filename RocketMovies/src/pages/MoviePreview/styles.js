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

    display: flex;
    flex-direction: column;
    gap: 40px;

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      
      color: ${({theme}) => theme.COLORS.PRIMARY};
    }

    .data-movie {
      display: flex;
      align-items: center;
      gap: 20px;

      margin-top: -14px;
    }

    .data-creation {
      display: flex;
      align-items: center;
      gap: 10px;

      margin-top: -24px;

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      svg {
        color: ${({theme}) => theme.COLORS.PRIMARY};
      }

      svg + span {
        margin-left: -5px;
      }
    }

    .tags {
      display: flex;
      gap: 8px;
      
      span {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_ROSE_800};
      }
    }

    .movie-text {
      font-weight: 300;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    h2 {
      font-size: 36px;
      font-weight: 400;
    }
  }
`