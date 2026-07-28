import React from 'react'

const CalculateScore = ({ name, school, total, goal }) => {
  const score = ((total / goal) * 100).toFixed(2)

  return (
    <section className="student-card" aria-labelledby="student-details-title">
      <h1 id="student-details-title">Student Details:</h1>
      <p className="detail detail-name">
        <span>Name:</span> {name}
      </p>
      <p className="detail detail-school">
        <span>School:</span> {school}
      </p>
      <p className="detail detail-total">
        <span>Total:</span> {total}Marks
      </p>
      <p className="detail detail-score">
        <span>Score:</span> {score}%
      </p>
    </section>
  )
}

export default CalculateScore