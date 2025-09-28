import React, { useState } from 'react'

const TransactionForm = ({ onAddTransaction }) => {
  const [type, setType] = useState('spending')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount')
      return
    }
    
    onAddTransaction({
      type,
      amount: parseFloat(amount),
      description
    })
    
    // Reset form
    setAmount('')
    setDescription('')
  }

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h3>What did you do?</h3>
            <div className="type-buttons">
              <button
                type="button"
                className={`type-button ${type === 'spending' ? 'selected' : ''}`}
                onClick={() => setType('spending')}
              >
                🛍️ Spending
              </button>
              <button
                type="button"
                className={`type-button ${type === 'income' ? 'selected' : ''}`}
                onClick={() => setType('income')}
              >
                💰 Income
              </button>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            <h3>Amount (HKD)</h3>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="0"
              step="0.01"
              className="amount-input"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            <h3>Description</h3>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What was it for?"
              className="description-input"
            />
          </label>
        </div>

        <button type="submit" className="submit-button">
          {type === 'spending' ? 'Record Spending' : 'Add Income'}
        </button>
      </form>
    </div>
  )
}

export default TransactionForm