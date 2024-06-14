import { useState, useEffect } from 'react'
import './App.css'

import Card from './Card';

function App() {
  const [choices, setChoices] = useState([]);
  const [isViewing, setIsViewing] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (choices.length > 0 && choices[0] && choices[1]) {
      if (choices[0].content === choices[1].content) {
        alert('We have a match!');
      }

      setIsViewing(true);

      setTimeout(() => {
        setIsViewing(false);
        setChoices([]);
      }, 1500)

    } else {
      setIsViewing(false);
    }
  }, [choices])

  function handleClick(e) {
    if (choices.length > 1) return;

    setChoices([...choices, {id: e.target.id, content: e.target.dataset.value}]);
  }

  let viewingClass = isViewing ? 'board--viewing' : '';

  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <div className={`board ${viewingClass}`}>
          <Card content="A" handleClick={(e) => handleClick(e)} choices={choices} id="1" />
          <Card content="B" handleClick={(e) => handleClick(e)} choices={choices} id="2" />
          <Card content="C" handleClick={(e) => handleClick(e)} choices={choices} id="3" />
          <Card content="B" handleClick={(e) => handleClick(e)} choices={choices} id="4" />
          <Card content="D" handleClick={(e) => handleClick(e)} choices={choices} id="5" />
          <Card content="E" handleClick={(e) => handleClick(e)} choices={choices} id="6" />
          <Card content="C" handleClick={(e) => handleClick(e)} choices={choices} id="7" />
          <Card content="F" handleClick={(e) => handleClick(e)} choices={choices} id="8" />
          <Card content="F" handleClick={(e) => handleClick(e)} choices={choices} id="9" />
          <Card content="E" handleClick={(e) => handleClick(e)} choices={choices} id="10" />
          <Card content="A" handleClick={(e) => handleClick(e)} choices={choices} id="11" />
          <Card content="D" handleClick={(e) => handleClick(e)} choices={choices} id="12" />
        </div>
      </div>
    </>
  )
}

export default App
