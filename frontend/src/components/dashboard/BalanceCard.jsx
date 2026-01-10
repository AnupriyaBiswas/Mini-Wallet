function BalanceCard({ balance }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>
      <h3>Wallet Balance</h3>
      <h1>₹ {balance}</h1>
    </div>
  )
}

export default BalanceCard
