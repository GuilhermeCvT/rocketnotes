import { useState } from "react";
import { api } from '../../service/api'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from '../../components/Button'
import { FiArrowLeft } from 'react-icons/fi'

export function NewMovie() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')

  const navigate = useNavigate() 

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title)
      return alert('Adicione um título ao filme.')

    await api.post('/notes', {title, description, rating, tags})

    alert('Nota criada com sucesso')
    navigate(-1)
  }

  return(
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/"><FiArrowLeft /> Voltar</Link>
        </header>
        
        <Form>
          <Section title='Novo filme'> 
            <div className="inputs-text">
              <Input type='text' placeholder='Titulo' onChange={e => setTitle(e.target.value)}/>
              <Input type='number' placeholder='Sua nota (de 0 a 5)' min='0' max='5' onChange={e => setRating(e.target.value)}/>
            </div>

            <TextArea placeholder='Observações' onChange={e => setDescription(e.target.value)}/>
          </Section>

          <Section title=''>
            <h2>Marcadores</h2>
            
            <div className="MovieItens">
              {
                tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    disabled
                  />
                ))
              }

              <MovieItem 
                placeholder='Novo marcador' 
                isNew={true} 
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />
            </div>
          </Section>

          <div className="buttons">
            
            <Button title='Salvar alterações' onClick={handleNewNote}/>
          </div>
        </Form>
      </main>
    </Container>
  )
}