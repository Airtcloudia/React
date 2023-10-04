import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const somma = (a,b) => {
  const result = a + b;
  return result;

 }
const result = somma(5,6);
  return (
    <h2>{result}</h2>
  )
}

export default App
