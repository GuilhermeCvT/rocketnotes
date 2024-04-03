import { Container } from "./styles";
import { FiX, FiPlus } from 'react-icons/fi'

export function MovieItem({isNew = false, value, onClick, ...rest}) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={value} {...rest} />

      <button onClick={onClick} type="button">{isNew ? <FiPlus /> : <FiX />}</button>
    </Container>
  )
}