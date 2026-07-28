import heroImg from './assets/hero.png'
import './App.css'

const officeSpace = {
  Name: 'DBS',
  Rent: 50000,
  Address: 'Chennai',
}

const officeSpaces = [
  { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
  { Name: 'WeWork', Rent: 75000, Address: 'Bengaluru' },
  { Name: 'Awfis', Rent: 61000, Address: 'Hyderabad' },
  { Name: 'Smartworks', Rent: 58000, Address: 'Pune' },
]

function App() {
  return (
    <main className="page">
      <section className="hero-card">
        <p className="eyebrow"></p>
        <h1>Office Space, at Affordable Range</h1>
        <img
          src={heroImg}
          className="office-image"
          width="220"
          height="220"
          alt="Office Space"
        />

        <div className="primary-office">
          <h2>Name: {officeSpace.Name}</h2>
          <p className={officeSpace.Rent <= 60000 ? 'rent rent-low' : 'rent rent-high'}>
            Rent: Rs. {officeSpace.Rent}
          </p>
          <p className="address">Address: {officeSpace.Address}</p>
        </div>
      </section>

      <section className="list-card">
        <h2>More Office Spaces</h2>
        <div className="office-list">
          {officeSpaces.map((space) => (
            <article className="office-item" key={space.Name}>
              <h3>{space.Name}</h3>
              <p className={space.Rent <= 60000 ? 'rent rent-low' : 'rent rent-high'}>
                Rent: Rs. {space.Rent}
              </p>
              <p className="address">Address: {space.Address}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
