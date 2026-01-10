import { useState } from "react"
import { useTransactions } from "../hooks/useTransactions"
import { deleteTransaction } from "../api/transactions.api"

function Transactions() {
  const { transactions, loading } = useTransactions()
  const [statusFilter, setStatusFilter] = useState("all")

  if (loading) return <p>Loading...</p>

  const filtered = transactions.filter(txn => {
    if (statusFilter === "all") return true
    return txn.status === statusFilter
  })

  return (
    <div>
      <h2>Transaction History</h2>

      <select onChange={e => setStatusFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="success">Success</option>
        <option value="failed">Failed</option>
      </select>

      <ul>
        {filtered.map(txn => (
          <li key={txn.id}>
            {txn.type} - ₹{txn.amount} - {txn.status}
            <button onClick={() => deleteTransaction(txn.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transactions
