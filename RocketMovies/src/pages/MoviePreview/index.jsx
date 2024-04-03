import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import DateObject from 'react-date-object'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from '../../service/api'
import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Button } from "../../components/Button";
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { FiArrowLeft } from 'react-icons/fi'
import { MdOutlineWatchLater } from "react-icons/md";

export function MoviePreview() {
  const [data, setData] = useState(null)
  const [dateCreation, setDateCreation] = useState('')
  const [timeCreation, setTimeCreation] = useState('')
  const params = useParams()
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
      setDateCreation(new DateObject(response.data.created_at).format("DD/MM/YYYY"))
      setTimeCreation(new DateObject(response.data.created_at).format("hh:mm"))
    }

    fetchMovie()
  }, [])

  async function handleRemove() {
    const confirm = window.confirm('Deseja excluir o filme?')

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  return (
    <Container>
      <Header />

      { 
        data &&
        <main>
          <Link to='/'> <FiArrowLeft /> Voltar</Link>

          <div className="data-movie">
            <h2>{data.title}</h2>
            <Stars numStarsFill={data.rating}/>
          </div>

          <div className="data-creation">
            <img src={avatarUrl} alt="Foto do usuário" />
            <span>Por {user.name}</span>
            <MdOutlineWatchLater />
            <span>{dateCreation} às {timeCreation}</span>
          </div>

          {console.log(data.tags)}
          { 
            data.tags &&
            <div className="tags">
              {
                data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))
              }
            </div>
          }

          <div className="movie-text">
            <p>{data.description}</p>
          </div>

          <Button title='Excluir filme' exclude='true' onClick={handleRemove}/>
        </main>
      }
    </Container>
  )
}