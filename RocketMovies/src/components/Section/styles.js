import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  ::-webkit-scrollbar-thumb {
    margin-top: 100px;
  }

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 32px;
    font-weight: 400;
  }
`