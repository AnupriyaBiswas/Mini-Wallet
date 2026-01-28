# 💰 Mini Wallet - A Modern FinTech Solution

A sleek, secure, and intuitive digital wallet application designed for seamless money management and transfers. Built with cutting-edge web technologies and real-time transaction tracking.

---

## ✨ Unique Selling Points

### 🔐 **Verified User Network**
- Transfer money only to verified beneficiaries from your trusted network
- Smart autocomplete suggests valid recipients as you type
- Prevents accidental transfers to invalid accounts with real-time validation

### 📊 **Intelligent Dashboard**
- Real-time balance calculation with visual insights
- Credit/Debit breakdowns with beautiful donut charts
- Area charts for balance trends and patterns
- Recent transaction overview at a glance

### 💳 **Smart Transaction Management**
- Automatic 2% fee calculation on transfers
- Built-in transaction limits (₹10,000 max) for security
- Transparent balance computation: Credits − Debits − Fees
- Instant error notifications for invalid operations

### ⚡ **User Experience Excellence**
- Lightning-fast Vite-powered React frontend
- Smooth animations and transitions
- Toast notifications for real-time feedback
- Fully responsive design for all devices

---

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React 18 with Hooks
- ⚡ Vite (Ultra-fast bundler)
- 🎨 Tailwind CSS (Modern styling)
- 📡 Axios (HTTP client)
- 🚀 React Router (Navigation)
- 🔔 React Hot Toast (Notifications)

**Backend:**
- 📦 JSON Server (Mock REST API)
- 💾 db.json (Data persistence)

**Testing:**
- 🧪 Jest + React Testing Library
- ✅ Unit and Integration tests

---

## 🎯 Core Features

✅ **Wallet Dashboard** - View balance with visual breakdowns  
✅ **Add Money** - Top-up wallet balance instantly  
✅ **Transfer Money** - Send funds to verified recipients with autocomplete  
✅ **Transaction History** - Track all credits, debits, and fees  
✅ **Real-time Notifications** - Instant feedback on all operations  
✅ **Error Handling** - User-friendly error messages  
✅ **Verified Recipients** - Only transfer to valid users in the network  

---

## 📋 Business Rules

| Rule | Value |
|------|-------|
| Transaction Fee | 2% |
| Maximum Transfer Limit | ₹10,000 |
| Balance Formula | Credits − Debits − Fees |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/AnupriyaBiswas/Mini-Wallet.git
cd Mini-Wallet
```

**2. Start Backend (Terminal 1)**
```bash
cd backend
npm install
npx json-server --watch db.json --port 4000
```

**3. Start Frontend (Terminal 2)**
```bash
cd frontend
npm install
npm run dev
```

**4. Open in Browser**
Navigate to `http://localhost:5173`

---

## 🧪 Running Tests

```bash
cd frontend
npm run test
```

---

## 📁 Project Structure

```
mini-wallet/
├── frontend/               # React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── api/           # API integration
│   │   ├── utils/         # Helper functions
│   │   └── tests/         # Test files
│   └── package.json
└── backend/               # JSON Server
    ├── db.json           # Database
    └── package.json
```

---

## 💡 Key Functionalities Explained

### Smart Recipient Validation
Type a name and get real-time suggestions from the verified user network. The system validates the recipient before processing any transfer.

### Balance Calculation
Transparent formula ensures users understand exactly how their balance is computed after every transaction.

### Visual Analytics
Beautiful charts and graphs help users understand spending patterns and balance trends at a glance.

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests to improve the application.

---

## 📝 License

This project is open-source and available for educational purposes.

---

## 👤 Author

**Anupriya Biswas**  
[GitHub](https://github.com/AnupriyaBiswas)

---

Made with ❤️ for secure, seamless digital payments
