import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
   <h1>Hello, {name}</h1>
  )
}

export default App

/* se non passiamo come parametro {name} riga 6, React non lo trova e lo considera non definito, perchè non è corretto