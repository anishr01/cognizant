import React from 'react'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const App = () => {
	return (
		<main className="app-shell">
			<Home />
			<About />
			<Contact />
		</main>
	)
}

export default App
