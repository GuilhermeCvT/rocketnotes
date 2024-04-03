import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import { Header} from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from '../../components/Button'
import { Movie } from "../../components/Movie";
import { FiPlus } from 'react-icons/fi'
import { api } from '../../service/api'

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data.notesWithTags)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header changeSearch={setSearch}/>

      <Content>
        <Button title='Adicionar filme' $icon={FiPlus} to='new'/>
        <Section title='Meus Filmes'>
          {
            movies.map(movie => (
              <Movie 
                key={String(movie.id)} 
                onClick={() => handleDetails(movie.id)}
                data={{
                title: movie.title,
                numStarsFill: movie.rating,
                tags: movie.tags,
                text: movie.description
                }}
              />
            ))
          }
        </Section>
      </Content>
    </Container>
  )
}