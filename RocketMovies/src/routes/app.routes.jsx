import { Routes, Route, Navigate } from "react-router-dom";
import { NewMovie } from '../pages/NewMovie'
import { Home } from '../pages/Home'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<NewMovie />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/details/:id" element={<MoviePreview />}></Route>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
  )
}