import { useState, useEffect } from 'react'
import './App.css'

import Header from './Header';
import NewGame from './NewGame';
import Turns from './Turns';
import Board from './Board';
import Card from './Card';
import Sidebar from './Sidebar';
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

  const [scores, setScores] = useState(null);

  useEffect(() => {
    if (allMatched()) {
      saveScores();
    }
  }, [turnsCount])

  useEffect(() => {
    getScores();
  }, [])

  function getScores() {
    let scores = JSON.parse(localStorage.getItem('scores'));
    if (!scores) {
      scores = [];
    }
    setScores(scores);
  }

  function saveScores() {
    if (!scores) return;
    let updatedScores = [...scores, turnsCount];
    setScores(updatedScores);
    localStorage.setItem('scores', JSON.stringify(updatedScores));
  }

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
      <Header title="Memory Game 🧠" />
      <NewGame handleNewGameClick={handleNewGameClick} />
      <main>
        <Sidebar
            scores={scores}
          />
        <Board cardsList={cardsList} />
        <div className="wrapper">
          <Turns count={turnsCount} />
        </div>
      </main>
      <Popup showPopup={showPopup}>
        <NewGame handleNewGameClick={handleNewGameClick} />
      </Popup>
    </>
  )
}

export default App
