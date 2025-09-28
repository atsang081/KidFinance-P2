import React from 'react'

const PiggyBank = ({ balance }) => {
  return (
    <div className="piggy-bank">
      <div className="piggy-body">
        <div className="piggy-ear left-ear"></div>
        <div className="piggy-ear right-ear"></div>
        <div className="piggy-eye left-eye"></div>
        <div className="piggy-eye right-eye"></div>
        <div className="piggy-nose">
          <div className="piggy-nostril"></div>
        </div>
        <div className="piggy-mouth"></div>
        <div className="piggy-tail"></div>
        <div className="piggy-leg front-leg"></div>
        <div className="piggy-leg back-leg"></div>
      </div>
      <div className="coin-animation">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="coin" style={{animationDelay: `${i * 0.2}s`}}></div>
        ))}
      </div>
      <div className="balance-display">
        <p>Your Savings:</p>
        <h2>HK${balance.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default PiggyBank