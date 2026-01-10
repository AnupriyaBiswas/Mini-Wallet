# Mini FinTech Wallet Application

## Overview
A mini wallet application that allows users to add money, transfer funds, and track transaction history with business rules like transaction fees and limits.

## Tech Stack
- React (Vite)
- json-server (Mock Backend)
- Axios
- React Router
- React Hot Toast
- Jest + Testing Library

## Features
- Wallet balance dashboard
- Add money to wallet
- Transfer money with fee and limit
- Transaction history with filters
- Error handling and loading states
- Unit tests

## Business Rules
- Transaction fee: 2%
- Max transaction limit: ₹10,000
- Balance = credits − debits − fees

## Setup Instructions

### Backend
```bash
cd backend
npx json-server --watch db.json --port 4000
