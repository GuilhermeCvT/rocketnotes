import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BORDER};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 5px 200px;
`

export const Logo = styled.span`
  color: ${({theme}) => theme.COLORS.PRIMARY};
  font-size: 22px;
  font-weight: bold;
`

export const Search = styled.div`
  width: 50%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  text-align: end;
  gap: 10px;

  > a img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    justify-content: end;
  }

  > strong {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  a {
    color: ${({theme}) => theme.COLORS.TEXT};
  }
`