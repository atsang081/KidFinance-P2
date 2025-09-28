import React, { useState } from 'react'

const ParentDashboard = ({ onClose, interestRate, setInterestRate, onAddIncome }) => {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [tempInterestRate, setTempInterestRate] = useState(interestRate)
  const [incomeAmount, setIncomeAmount] = useState('')
  const [incomeDescription, setIncomeDescription] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const correctPassword = 'parent123' // In a real app, this would be more secure

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password! Please try again.')
    }
  }

  const handleInterestRateChange = (e) => {
    e.preventDefault()
    setInterestRate(tempInterestRate)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleAddIncome = (e) => {
    e.preventDefault()
    
    if (!incomeAmount || incomeAmount <= 0) {
      alert('Please enter a valid amount')
      return
    }
    
    onAddIncome({
      type: 'income',
      amount: parseFloat(incomeAmount),
      description: incomeDescription || 'Parent added income'
    })
    
    // Reset form
    setIncomeAmount('')
    setIncomeDescription('')
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="parent-dashboard-overlay">
      <div className="parent-dashboard">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>👨‍👧 Parent Dashboard</h2>
        
        {!isAuthenticated ? (
          <div className="login-form">
            <h3>Enter Parent Password</h3>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
              />
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        ) : (
          <div className="dashboard-content">
            <div className="dashboard-section">
              <h3>Adjust Interest Rate</h3>
              <form onSubmit={handleInterestRateChange} className="interest-form">
                <div className="form-group">
                  <label>
                    Current Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="number"
                    value={tempInterestRate}
                    onChange={(e) => setTempInterestRate(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                    className="interest-input"
                  />
                </div>
                <button type="submit" className="update-button">Update Rate</button>
              </form>
            </div>
            
            <div className="dashboard-section">
              <h3>Add Income for Child</h3>
              <form onSubmit={handleAddIncome} className="income-form">
                <div className="form-group">
                  <label>Amount (HKD)</label>
                  <input
                    type="number"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                    className="amount-input"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    value={incomeDescription}
                    onChange={(e) => setIncomeDescription(e.target.value)}
                    placeholder="e.g., Weekly allowance"
                    className="description-input"
                  />
                </div>
                <button type="submit" className="add-income-button">Add Income</button>
              </form>
            </div>
            
            {showSuccess && (
              <div className="success-message">
                ✅ Changes saved successfully!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ParentDashboard