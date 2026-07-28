import React from 'react'
import './index.css'
import CalculateScore from './CalculateScore.jsx'

function App() {
  return (
    <main className="page-shell">
      <CalculateScore
        name="Steve"
        school="DNV Public School"
        total={284}
        goal={300}
      />
    </main>
  )
}

export default App