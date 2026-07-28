import { useState } from 'react'
import './App.css'

const flights = [
  { id: 'AI-201', from: 'Chennai', to: 'Delhi', time: '06:20 AM', price: 5899 },
  { id: '6E-455', from: 'Bengaluru', to: 'Mumbai', time: '09:15 AM', price: 4499 },
  { id: 'SG-112', from: 'Hyderabad', to: 'Kolkata', time: '01:45 PM', price: 5299 },
]

function LoginButton({ onClick }) {
  return (
    <button type="button" className="action-button" onClick={onClick}>
      Login
    </button>
  )
}

function LogoutButton({ onClick }) {
  return (
    <button type="button" className="action-button" onClick={onClick}>
      Logout
    </button>
  )
}

function GuestGreeting() {
  return (
    <section className="panel hero-panel">
      <div className="eyebrow">Guest access</div>
      <h1>Please sign up.</h1>
      <p className="lead">Browse flight details before you log in to book tickets.</p>

      <div className="flight-grid">
        {flights.map((flight) => (
          <article className="flight-card" key={flight.id}>
            <h2>{flight.id}</h2>
            <p>
              {flight.from} to {flight.to}
            </p>
            <p>Departure: {flight.time}</p>
            <p>Fare: Rs. {flight.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function UserGreeting() {
  const [passengerName, setPassengerName] = useState('')
  const [flightId, setFlightId] = useState(flights[0].id)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Ticket booked for ${passengerName} on flight ${flightId}`)
  }

  return (
    <section className="panel hero-panel user-panel">
      <div className="eyebrow">Logged in</div>
      <h1>Welcome back</h1>
      <p className="lead">Book tickets from the available flights below.</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Passenger name
          <input
            type="text"
            value={passengerName}
            onChange={(event) => setPassengerName(event.target.value)}
            placeholder="Enter passenger name"
            required
          />
        </label>

        <label>
          Select flight
          <select value={flightId} onChange={(event) => setFlightId(event.target.value)}>
            {flights.map((flight) => (
              <option key={flight.id} value={flight.id}>
                {flight.id} - {flight.from} to {flight.to}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="booking-button">
          Book ticket
        </button>
      </form>

    </section>
  )
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />
  }

  return <GuestGreeting />
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="brand">Ticket Booking App</p>
          <h2>Flights for guests, bookings for users</h2>
        </div>

        {isLoggedIn ? (
          <LogoutButton onClick={() => setIsLoggedIn(false)} />
        ) : (
          <LoginButton onClick={() => setIsLoggedIn(true)} />
        )}
      </header>

      <Greeting isLoggedIn={isLoggedIn} />
    </main>
  )
}

export default App
