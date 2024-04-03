import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, Search, Profile } from "./styles";
import { Input } from '../Input'
import { api } from '../../service/api'
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/user-circle-fill.svg'

export function Header({changeSearch}) {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container>
      <Logo>
        RocketMovies
      </Logo>

      <Search>
        <Input placeholder='Pesquisar pelo título' onChange={e => changeSearch(e.target.value)}/>
      </Search>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <a onClick={handleSignOut}>Sair</a>
        </div>

        <Link to="/profile"><img src={avatarUrl} alt={user.name} /></Link>
      </Profile>
    </Container>
  )
}