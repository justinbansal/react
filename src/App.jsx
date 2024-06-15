import { useState} from 'react'
import './App.css'

import Card from './Card';
import Turns from './Turns';

function App() {

  const [cards, setCards] = useState([
    {
      content: 'A',
      selected: false,
      matched: false,
    },
    {
      content: 'B',
      selected: false,
      matched: false,
    },
    {
      content: 'C',
      selected: false,
      matched: false,
    },
    {
      content: 'B',
      selected: false,
      matched: false,
    },
    {
      content: 'D',
      selected: false,
      matched: false,
    },
    {
      content: 'E',
      selected: false,
      matched: false,
    },
    {
      content: 'C',
      selected: false,
      matched: false,
    },
    {
      content: 'F',
      selected: false,
      matched: false,
    },
    {
      content: 'F',
      selected: false,
      matched: false,
    },
    {
      content: 'E',
      selected: false,
      matched: false,
    },
    {
      content: 'A',
      selected: false,
      matched: false,
    },
    {
      content: 'D',
      selected: false,
      matched: false,
    }
  ])

  const [turnsCount, setTurnsCount] = useState(0);

  const isMatch = function checkCardsForMatch() {
    const selectedCards = cards.filter(card => card.selected);
    if (selectedCards[0].content === selectedCards[1].content) {
      selectedCards[0].matched = true;
      selectedCards[1].matched = true;
      return true;
    }
  }

  const allMatched = function checkMatches() {
    const unMatched = cards.filter(card => card.matched === false);
    if (unMatched.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  function updateTurnsCount() {
    if (allMatched()) return;
    let count = turnsCount;
    count++;
    setTurnsCount(count);
  }

  const twoCardsSelected = function countSelected() {
    let selectedCards = cards.filter(card => card.selected);
    if (selectedCards.length === 2) {
      return true;
    }
  }

  function handleClick(i) {
    if (twoCardsSelected()) return;
    const updatedCards = cards.slice();
    updatedCards[i].selected = !cards[i].selected;
    setCards(updatedCards);
    if (twoCardsSelected()) {
      updateTurnsCount();
      if (isMatch()) {
        setTimeout(() => {
          let updatedCards = cards.map(card => {
            if (card.selected === true) {
              card.selected = false;
              return card;
            }
            return card;
          });
          setCards(updatedCards);
        }, 1000);
      } else {
        setTimeout(() => {
          let updatedCards = cards.map(card => {
            if (card.selected === true) {
              card.selected = false;
              return card;
            }
            return card;
          });
          setCards(updatedCards);
        }, 1500);
        return;
      }
    }
  }

  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <div className="board">
          <Card content={cards[0].content} handleClick={() => handleClick(0)} isSelected={cards[0].selected} isMatched={cards[0].matched} />
          <Card content={cards[1].content} handleClick={() => handleClick(1)} isSelected={cards[1].selected} isMatched={cards[1].matched} />
          <Card content={cards[2].content} handleClick={() => handleClick(2)} isSelected={cards[2].selected} isMatched={cards[2].matched} />
          <Card content={cards[3].content} handleClick={() => handleClick(3)} isSelected={cards[3].selected} isMatched={cards[3].matched} />
          <Card content={cards[4].content} handleClick={() => handleClick(4)} isSelected={cards[4].selected} isMatched={cards[4].matched} />
          <Card content={cards[5].content} handleClick={() => handleClick(5)} isSelected={cards[5].selected} isMatched={cards[5].matched} />
          <Card content={cards[6].content} handleClick={() => handleClick(6)} isSelected={cards[6].selected} isMatched={cards[6].matched} />
          <Card content={cards[7].content} handleClick={() => handleClick(7)} isSelected={cards[7].selected} isMatched={cards[7].matched} />
          <Card content={cards[8].content} handleClick={() => handleClick(8)} isSelected={cards[8].selected} isMatched={cards[8].matched} />
          <Card content={cards[9].content} handleClick={() => handleClick(9)} isSelected={cards[9].selected} isMatched={cards[9].matched} />
          <Card content={cards[10].content} handleClick={() => handleClick(10)} isSelected={cards[10].selected} isMatched={cards[10].matched} />
          <Card content={cards[11].content} handleClick={() => handleClick(11)} isSelected={cards[11].selected} isMatched={cards[11].matched} />
        </div>
        <Turns count={turnsCount} />
      </div>
    </>
  )
}

export default App
