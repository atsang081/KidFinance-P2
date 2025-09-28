import React from 'react'

const PiggyBank = ({ balance }) => {
  return (
    <div className="piggy-bank">
      <div className="piggy-character">
        <div className="piggy-face">
          <div className="piggy-eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="piggy-snout"></div>
        </div>
        <div className="piggy-coins">
          <div className="coin coin-1"></div>
          <div className="coin coin-2"></div>
          <div className="coin coin-3"></div>
        </div>
      </div>
      <div className="savings-display">
        <p>Your Savings:</p>
        <h3>HK${balance.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default PiggyBank