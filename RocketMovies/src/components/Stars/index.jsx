import { Container } from "./styles";
import {PiStar, PiStarFill} from 'react-icons/pi'

export function Stars({numStarsFill}) {
  const maxStars = 5
  const stars = []

  for (let i = 0; i < numStarsFill; i++)
    stars.push(<PiStarFill key={String(i)}/>)

  for (let i = numStarsFill; i < maxStars; i++)
    stars.push(<PiStar key={String(i)}/>)

  return (
    <Container>
      {stars}
    </Container>
  )
}