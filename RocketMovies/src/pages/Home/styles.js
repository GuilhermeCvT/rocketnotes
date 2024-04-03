import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  'header'
  'content';
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 200px;
  margin-top: 30px;
  margin-bottom: 50px;
  position: relative;
  overflow-y: auto;

  display: flex;

  > a:first-child {
    position: absolute;
    top: 2px;
    right: 200px;
    width: 250px;
    height: 45px;
  }
`