import { Container } from "./styles";
import { Tag } from "../Tag";
import { Stars } from "../Stars";
import {PiStar, PiStarFill} from 'react-icons/pi'

export function Movie({data, numStarsFill, ...rest}) {
  const Star = []
  Star.push(<PiStar />)

  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Stars numStarsFill={data.numStarsFill}/>
      <span>{data.text}</span>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={String(tag.id)} title={tag.name}></Tag>)
          }
        </footer>
      }
    </Container>
  )
}