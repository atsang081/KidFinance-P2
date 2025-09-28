import React, { useState, useEffect } from 'react'
import './App.css'
import './components/PiggyBank.css'
import './components/BalanceDisplay.css'
import './components/TransactionForm.css'
import './components/ParentDashboard.css'
import PiggyBank from './components/PiggyBank'
import TransactionForm from './components/TransactionForm'
import BalanceDisplay from './components/BalanceDisplay'
import ParentDashboard from './components/ParentDashboard'

function App() {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [showParentDashboard, setShowParentDashboard] = useState(false)
  const [interestRate, setInterestRate] = useState(2.5) // Default interest rate
  const [fixedTermDeposits, setFixedTermDeposits] = useState([])

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBalance = localStorage.getItem('balance')
    const savedTransactions = localStorage.getItem('transactions')
    const savedInterestRate = localStorage.getItem('interestRate')
    const savedFixedTermDeposits = localStorage.getItem('fixedTermDeposits')

    if (savedBalance) setBalance(parseFloat(savedBalance))
    if (savedTransactions) setTransactions(JSON.parse(savedTransactions))
    if (savedInterestRate) setInterestRate(parseFloat(savedInterestRate))
    if (savedFixedTermDeposits) setFixedTermDeposits(JSON.parse(savedFixedTermDeposits))
  }, [])

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('balance', balance.toString())
  }, [balance])

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    localStorage.setItem('interestRate', interestRate.toString())
  }, [interestRate])

  useEffect(() => {
    localStorage.setItem('fixedTermDeposits', JSON.stringify(fixedTermDeposits))
  }, [fixedTermDeposits])

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    }
    
    setTransactions([newTransaction, ...transactions])
    
    // Update balance based on transaction type
    if (transaction.type === 'income') {
      setBalance(prev => prev + transaction.amount)
    } else if (transaction.type === 'spending') {
      setBalance(prev => Math.max(0, prev - transaction.amount)) // Prevent negative balance
    } else if (transaction.type === 'deposit') {
      setBalance(prev => Math.max(0, prev - transaction.amount)) // Move money to deposit
    }
  }

  const addFixedTermDeposit = (amount, termInDays) => {
    const newDeposit = {
      id: Date.now(),
      amount,
      termInDays,
      startDate: new Date(),
      endDate: new Date(Date.now() + termInDays * 24 * 60 * 60 * 1000),
      interestEarned: (amount * (interestRate / 100) * termInDays / 365),
      isMatured: false
    }
    
    setFixedTermDeposits([...fixedTermDeposits, newDeposit])
  }

  const checkMaturedDeposits = () => {
    const now = new Date()
    const updatedDeposits = fixedTermDeposits.map(deposit => {
      if (!deposit.isMatured && now >= new Date(deposit.endDate)) {
        // Add interest to balance when deposit matures
        setBalance(prev => prev + deposit.amount + deposit.interestEarned)
        return { ...deposit, isMatured: true }
      }
      return deposit
    })
    
    setFixedTermDeposits(updatedDeposits)
  }

  // Check for matured deposits every minute
  useEffect(() => {
    const interval = setInterval(checkMaturedDeposits, 60000)
    return () => clearInterval(interval)
  }, [fixedTermDeposits])

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 HKD Financial Fun! 💰</h1>
        <p>Learn about money with our friendly piggy bank!</p>
      </header>

      <main className="app-main">
        <div className="dashboard">
          <BalanceDisplay balance={balance} />
          <PiggyBank balance={balance} />
        </div>

        <div className="transaction-section">
          <h2>What would you like to do today?</h2>
          <TransactionForm onAddTransaction={addTransaction} />
        </div>

        <div className="fixed-deposit-section">
          <h2>Fixed Term Deposits</h2>
          <button onClick={() => addFixedTermDeposit(100, 30)} className="deposit-button">
            Create 30-day Deposit (HK$100)
          </button>
          <button onClick={() => addFixedTermDeposit(200, 60)} className="deposit-button">
            Create 60-day Deposit (HK$200)
          </button>
        </div>

        <div className="parent-access">
          <button onClick={() => setShowParentDashboard(true)} className="parent-button">
            Parent Dashboard
          </button>
        </div>
      </main>

      {showParentDashboard && (
        <ParentDashboard 
          onClose={() => setShowParentDashboard(false)}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          onAddIncome={addTransaction}
        />
      )}
    </div>
  )
}

export default App