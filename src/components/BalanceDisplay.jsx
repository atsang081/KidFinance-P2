import React from 'react'

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="balance-card">
      <h2>💰 Your HKD Balance 💰</h2>
      <div className="balance-amount">
        <span className="currency">HK$</span>
        <span className="amount">{balance.toFixed(2)}</span>
      </div>
      <div className="coins">
        <div className="coin coin-10"></div>
        <div className="coin coin-5"></div>
        <div className="coin coin-2"></div>
        <div className="coin coin-1"></div>
      </div>
    </div>
  )
}

export default BalanceDisplay