import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  color: ${({theme}) => theme.COLORS.TEXT};
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 20px;

    border: none;
    background: transparent;
    padding: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.TEXT};
    }
  }

  > svg {
    margin-left: 16px;
  }
`