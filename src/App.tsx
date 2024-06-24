import { useState, useEffect } from 'react'
import './App.css'
import matchSound from './assets/correct.wav';
import mismatchSound from './assets/incorrect.wav';

import Header from './Header';
import NewGame from './NewGame';
import Turns from './Turns';
import Board from './Board';
import Card from './Card';
import Sidebar from './Sidebar';
import Settings from './Settings';
import Popup from './Popup';

interface DefaultItems {
  content: string,
  selected: boolean,
  matched: boolean
  url?: string,
  name?: string,
}

const defaultItems: Array<DefaultItems> = [
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

  const [scores, setScores] = useState<Array<number | null>>([]);

  const [soundEnabled, setSoundEnabled] = useState<boolean>(
    JSON.parse(localStorage.getItem('soundEnabled') as string) || false
  );

  const [contentType, setContentType] = useState<string>(
    localStorage.getItem('contentType') || 'default'
  );

  useEffect(() => {
    if (allMatched()) {
      saveScores();
    }
  }, [turnsCount])

  useEffect(() => {
    getScores();
  }, [])

  useEffect(() => {
    storeSoundSettings();
  }, [soundEnabled])

  useEffect(() => {
    if (contentType === 'default') {
      setCards(defaultItems);
    }

    if (contentType === 'animals') {
      getAnimals();
    }

    if (contentType === 'cars') {
      getCars();
    }

    storeContentTypeSettings();
}, [contentType])

  async function getCars() {
    if (JSON.parse(localStorage.getItem('cars') as string)) {
      setCards(JSON.parse(localStorage.getItem('cars') as string));
      return;
    }

    let cars = [];
    let result = await fetchData('luxury');
    let resultDoubled = result.concat(result);
    shuffle(resultDoubled);
    cars = resultDoubled.map((item: DefaultItems) => ({
      ...item, isSelected: false, matched: false, url: `https://match-api-ten.vercel.app${item.url}`, content: item.name
    }));
    setCards(cars);
    localStorage.setItem('cars', JSON.stringify(cars));
  }

  async function getAnimals () {
    if (JSON.parse(localStorage.getItem('animals') as string)) {
      setCards(JSON.parse(localStorage.getItem('animals') as string));
      return;
    }
    let animals = [];
    let result = await fetchData('animals');
    let resultDoubled = result.concat(result);
    shuffle(resultDoubled);
    animals = resultDoubled.map((item: DefaultItems) => ({
      ...item, isSelected: false, matched: false, url: `https://match-api-ten.vercel.app${item.url}`, content: item.name
    }));
    setCards(animals);
    localStorage.setItem('animals', JSON.stringify(animals));
  }

  function shuffle(array: []) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  async function fetchData(dataType: string) {
   return fetch(`https://match-api-ten.vercel.app/${dataType}?limit=6`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then(response => response);
  }

  function storeContentTypeSettings() {
    localStorage.setItem('contentType', contentType);
  }

  function storeSoundSettings() {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }

  function playMatchSound() {
    if (!soundEnabled) return;

    new Audio(matchSound).play();
  }

  function playMismatchSound() {
    if (!soundEnabled) return;

    new Audio(mismatchSound).play();
  }

  function handleEnableSound(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSoundEnabled(true);
    } else {
      setSoundEnabled(false);
    }
  }

  function getScores() {
    let scores = JSON.parse(localStorage.getItem('scores') as string);
    if (!scores) {
      scores = [];
    }
    setScores(scores);
  }

  function saveScores() {
    if (scores.length === 0) return;
    let updatedScores = [...scores, turnsCount];
    setScores(updatedScores);
    localStorage.setItem('scores', JSON.stringify(updatedScores));
  }

  const isMatch = function checkCardsForMatch() {
    const selectedCards = cards.filter(card => card.selected);
    if (selectedCards[0] && selectedCards[1] && selectedCards[0].content === selectedCards[1].content) {
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
    updatedCards[i].selected = true;
    setCards(updatedCards);
    if (twoCardsSelected()) {
      updateTurnsCount();
      if (isMatch()) {
        playMatchSound();
        resetSelectedState(1000);
      } else {
        playMismatchSound();
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

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setContentType(e.target.value);
  }

  let cardsList = cards.map((card, index) => {
    return (
      <Card
        key={index}
        content={card.content}
        handleClick={() => handleClick(index)}
        isSelected={card.selected}
        isMatched={card.matched}
        url={card.url}
        name={card.name}
        />
    )
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
          <Settings
            handleEnableSound={handleEnableSound}
            soundEnabled={soundEnabled}
            handleSelectChange={handleSelectChange}
            contentType={contentType}
          />
        </div>
      </main>
      <Popup showPopup={showPopup}>
        <NewGame handleNewGameClick={handleNewGameClick} />
      </Popup>
    </>
  )
}

export default App
