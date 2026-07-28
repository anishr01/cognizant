import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function CurrencyConvertor() {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const numericAmount = Number(amount)

    if (Number.isNaN(numericAmount) || currency.trim() === '') {
      alert('Please enter a valid amount and currency')
      return
    }

    alert(`Converting to ${currency} Amount is ${numericAmount * 80}`)
  }

  return (
    <section className="converter-card">
      <h2>Currency Convertor!!!</h2>
      <form className="converter-form" onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount"
          />
        </label>
        <label>
          Currency:
          <input
            type="text"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
            placeholder="Euro"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

function App() {
  const [count, setCount] = useState(5)

  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1)
    alert('Hello Member')
  }

  const handleDecrement = () => {
    setCount((currentCount) => currentCount - 1)
  }

  const handleWelcome = (message) => {
    alert(message)
  }

  const handleClick = () => {
    alert('I was clicked')
  }

  return (
    <main className="page">
      <section className="events-panel">
        <div className="counter" aria-label="current counter value">
          {count}
        </div>

        <div className="button-stack">
          <button type="button" onClick={handleIncrement}>
            Increment
          </button>
          <button type="button" onClick={handleDecrement}>
            Decrement
          </button>
          <button type="button" onClick={() => handleWelcome('welcome')}>
            Say welcome
          </button>
          <button type="button" onClick={handleClick}>
            Click on me
          </button>
        </div>

        
      </section>

      <CurrencyConvertor />
    </main>
  )
}

export default App
