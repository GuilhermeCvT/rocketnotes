import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${({theme, $isNew}) => $isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border-width: 2px;
  border-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  border-style: ${({$isNew}) => $isNew ? 'dashed' : 'solid'};
  border-radius: 10px;

  > input {
    background: none;
    border: none;
    width: 125px;

    color: ${({theme}) => theme.COLORS.WHITE};
    
    &::placeholder {
      color: ${({theme}) => theme.COLORS.TEXT};
    }
  }

  > button {
    color: ${({theme}) => theme.COLORS.PRIMARY};

    border: none;
    background: none;

    display: flex;
    align-items: center;

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`