import { useState } from 'react'
import './App.css'

import Card from './Card';

function App() {
  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <div className="board">
          <Card content="A" />
          <Card content="B" />
          <Card content="C" />
          <Card content="B" />
          <Card content="D" />
          <Card content="E" />
          <Card content="C" />
          <Card content="F" />
          <Card content="F" />
          <Card content="E" />
          <Card content="A" />
          <Card content="D" />
        </div>
      </div>
    </>
  )
}

export default App
