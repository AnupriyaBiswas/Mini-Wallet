function BalanceCard({ balance }) {
  const isNegative = balance < 0

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h3 className="text-sm text-slate-400">
        Wallet Balance
      </h3>

      <div
        className={`mt-2 text-3xl font-bold ${
          isNegative ? "text-red-500" : "text-emerald-400"
        }`}
      >
        ₹ {balance}
      </div>

      <p className="mt-2 text-sm text-slate-400">
        Updated based on your recent transactions
      </p>
    </div>
  )
}

export default BalanceCard
