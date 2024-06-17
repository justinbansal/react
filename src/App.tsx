import { useState} from 'react'
import './App.css'

import New from './New';
import Card from './Card';
import Turns from './Turns';
import Popup from './Popup';

const defaultItems = [
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
]

function App() {

  const [cards, setCards] = useState(defaultItems)

  const [turnsCount, setTurnsCount] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

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

  function resetSelectedState(delay: number) {
    setTimeout(() => {
      let updatedCards = cards.map(card => {
        if (card.selected === true) {
          card.selected = false;
          return card;
        }
        return card;
      });
      setCards(updatedCards);
    }, delay);
  }

  function handleClick(i: number) {
    if (twoCardsSelected()) return;
    const updatedCards = cards.slice();
    updatedCards[i].selected = !cards[i].selected;
    setCards(updatedCards);
    if (twoCardsSelected()) {
      updateTurnsCount();
      if (isMatch()) {
        resetSelectedState(1000);
      } else {
        resetSelectedState(1500);
        return;
      }
    }
    if (allMatched()) {
      setShowPopup(true);
      return;
    }
  }

  function handleNewGameClick() {
    setShowPopup(false);
    setTurnsCount(0);
    let updatedCards = cards.map(card => {
      card.selected = false;
      card.matched = false;
      return card;
    });
    setCards(updatedCards);
  }

  let cardsList = cards.map((card, index) => {
    return <Card key={index} content={card.content} handleClick={() => handleClick(index)} isSelected={card.selected} isMatched={card.matched} />
  })

  return (
    <>
      <div>
        <h1>Memory Game 🧠</h1>
        <New handleNewGameClick={handleNewGameClick} />
        <div className="board">
          {cardsList}
        </div>
        <Turns count={turnsCount} />
        <Popup showPopup={showPopup} handleNewGameClick={handleNewGameClick} />
      </div>
    </>
  )
}

export default App
