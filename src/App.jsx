import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import PokemonListPage from './pages/pokemonListPage'
import PokemonDetailPage from './pages/pokemonDetailPage'
import TeamPage from './pages/teamPage'

function App() {

  return (
    <>
    <Router>
      <NavBar links={[{label:"Lista",path:"/"},{label:"Equipo", path:"/team"}]}/>
      <Routes>
        <Route path='/' element = {<PokemonListPage/>} />
        <Route path='/pokemon/:name' element = {<PokemonDetailPage/>}/>
        <Route path='/team' element={<TeamPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App