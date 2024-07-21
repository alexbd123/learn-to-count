import { useState } from 'react'
import './App.css'

function App() {

  const [englishCount, setEnglishCount] = useState({
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    isHidden: false
  });

  const [romanianCount, setRomanianCount] = useState({
    0: "Zero",
    1: "Unu",
    2: "Doi",
    3: "Trei",
    4: "Patru",
    5: "Cinci",
    6: "șase",
    7: "șapte",
    8: "Opt",
    9: "nouă",
    10: "Zece",
    isHidden: false
  });

  const [currentKey, setKey] = useState(0);

  function hideEnglish() {
    setEnglishCount(prevCount => ({...prevCount, isHidden: !prevCount.isHidden}))
  }

  function hideRomanian() {
    setRomanianCount(prevCount => ({...prevCount, isHidden: !prevCount.isHidden}))
  }

  function incrementCounts() {
    if (currentKey < 10) {
      setKey(prevKey => prevKey + 1);
    }
    console.log(currentKey);
  }

  function decrementCounts() {
    if (currentKey > 0) {
      setKey(prevKey => prevKey - 1);
    }
    console.log(currentKey);
  }

  return (
    <>
      <div id='buttons'>
        <button onClick={decrementCounts}>⬅️</button>
        <button onClick={incrementCounts}>➡️</button>
        <button onClick={hideEnglish}>Show/Hide English</button>
        <button onClick={hideRomanian}>Show/Hide Romanian</button>
        <button>Random (English)</button>
        <button>Random (Romanian)</button>
      </div>
      <div>
        {englishCount.isHidden ? "?" : englishCount[currentKey]}
      </div>
      <div>{romanianCount.isHidden ? "?" : romanianCount[currentKey]}</div>
    </>
  )
}

export default App
