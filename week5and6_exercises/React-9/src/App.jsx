import { useState } from 'react'
import './App.css'

const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'John', score: 40 },
  { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Marc', score: 80 },
  { name: 'Lora', score: 90 },
  { name: 'Robert', score: 100 },
  { name: 'David', score: 64 },
  { name: 'Richard', score: 74 },
  { name: 'Ron', score: 80 },
]

const t20Players = ['First Player', 'Second Player', 'Third Player']
const ranjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player']
const indianPlayers = [...t20Players, ...ranjiTrophyPlayers]

function ListofPlayers({ players }) {
  return (
    <section className="card">
      <h1>List of Players</h1>
      <ul className="player-list">
        {players.map((item) => (
          <li key={item.name}>
            Mr. {item.name} {item.score}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Scorebelow70({ players }) {
  const players70 = players.filter((item) => item.score < 70)

  return (
    <section className="card">
      <h1>List of Players having Scores Less than 70</h1>
      <ul className="player-list">
        {players70.map((item) => (
          <li key={item.name}>
            Mr. {item.name} {item.score}
          </li>
        ))}
      </ul>
    </section>
  )
}

function OddPlayers({ first, third, fifth }) {
  return (
    <section className="card">
      <h1>Odd Players</h1>
      <ul className="player-list">
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </section>
  )
}

function EvenPlayers({ second, fourth, sixth }) {
  return (
    <section className="card">
      <h1>Even Players</h1>
      <ul className="player-list">
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </section>
  )
}

function ListofIndianPlayers({ indianPlayers }) {
  return (
    <section className="card">
      <h1>List of Indian Players Merged:</h1>
      <ul className="player-list">
        {indianPlayers.map((player) => (
          <li key={player}>Mr. {player}</li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  const [flag, setFlag] = useState(true)

  return (
    <main className="page">
      <div className="shell">
        <header className="toolbar">
          <h2>Cricket App</h2>
          <button type="button" onClick={() => setFlag((current) => !current)}>
            Toggle View
          </button>
        </header>

        {flag === true ? (
          <div className="stack">
            <ListofPlayers players={players} />
            <Scorebelow70 players={players} />
          </div>
        ) : (
          <div className="stack">
            <OddPlayers first="Sachin1" third="Virat3" fifth="Yuvraj5" />
            <EvenPlayers second="Dhoni2" fourth="Rohit4" sixth="Raina6" />
            <ListofIndianPlayers indianPlayers={indianPlayers} />
          </div>
        )}
      </div>
    </main>
  )
}

export default App
