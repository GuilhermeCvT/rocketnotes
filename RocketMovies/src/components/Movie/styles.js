import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  text-align: start;

  gap: 15px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_ROSE_800};
  color: ${({theme}) => theme.COLORS.WHITE};
  padding: 32px;
  margin-bottom: 30px;

  border: none;
  border-radius: 20px;

  > h2 {
    font-size: 26px;
  }

  > span {
    color: ${({theme}) => theme.COLORS.TEXT};
  }

  footer {
    display: flex;
    gap: 10px;
  }
`