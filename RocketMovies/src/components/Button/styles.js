import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({theme, exclude}) => exclude ? theme.COLORS.BACKGROUND_ROSE_900 : theme.COLORS.PRIMARY};
  color: ${({theme, exclude}) => exclude ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND_ROSE_900};

  height: 56px;
  border: none;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > svg {
    margin-top: 2px;
  }

  &:disabled {
    opacity: 0.5;
  }
`