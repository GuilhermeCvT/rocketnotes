import styled from "styled-components";

export const Container = styled.textarea`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;

  width: 100%;
  height: 200px;
  resize: none;

  padding: 20px 16px;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.TEXT};
  }
`