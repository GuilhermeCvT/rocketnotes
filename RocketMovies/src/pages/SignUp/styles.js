import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  justify-content: center;
  flex-direction: column;  

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > a:last-child {
    margin-top: 40px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    svg {
      margin-top: 2px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`