import React from 'react'

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="balance-card">
      <h2>💰 Your HKD Balance 💰</h2>
      <div className="balance-amount">
        <span className="currency">HK$</span>
        <span className="amount">{balance.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default BalanceDisplay