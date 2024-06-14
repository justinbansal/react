import { useState} from 'react'
import './App.css'

import Card from './Card';

function App() {

  const [cards, setCards] = useState([
    {
      content: 'A',
      selected: false,
    },
    {
      content: 'B',
      selected: false,
    },
    {
      content: 'C',
      selected: false,
    },
    {
      content: 'B',
      selected: false,
    },
    {
      content: 'D',
      selected: false,
    },
    {
      content: 'E',
      selected: false,
    },
    {
      content: 'C',
      selected: false,
    },
    {
      content: 'F',
      selected: false,
    },
    {
      content: 'F',
      selected: false,
    },
    {
      content: 'E',
      selected: false,
    },
    {
      content: 'A',
      selected: false,
    },
    {
      content: 'D',
      selected: false,
    }
  ])

  function handleClick(i) {
    const updatedCards = cards.slice();
    updatedCards[i].selected = !cards[i].selected;
    setCards(updatedCards);
  }

  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <div className="board">
          <Card content={cards[0].content} handleClick={() => handleClick(0)} isSelected={cards[0].selected} />
          <Card content={cards[1].content} handleClick={() => handleClick(1)} isSelected={cards[1].selected} />
          <Card content={cards[2].content} handleClick={() => handleClick(2)} isSelected={cards[2].selected} />
          <Card content={cards[3].content} handleClick={() => handleClick(3)} isSelected={cards[3].selected} />
          <Card content={cards[4].content} handleClick={() => handleClick(4)} isSelected={cards[4].selected} />
          <Card content={cards[5].content} handleClick={() => handleClick(5)} isSelected={cards[5].selected} />
          <Card content={cards[6].content} handleClick={() => handleClick(6)} isSelected={cards[6].selected} />
          <Card content={cards[7].content} handleClick={() => handleClick(7)} isSelected={cards[7].selected} />
          <Card content={cards[8].content} handleClick={() => handleClick(8)} isSelected={cards[8].selected} />
          <Card content={cards[9].content} handleClick={() => handleClick(9)} isSelected={cards[9].selected} />
          <Card content={cards[10].content} handleClick={() => handleClick(10)} isSelected={cards[10].selected} />
          <Card content={cards[11].content} handleClick={() => handleClick(11)} isSelected={cards[11].selected} />
        </div>
      </div>
    </>
  )
}

export default App
