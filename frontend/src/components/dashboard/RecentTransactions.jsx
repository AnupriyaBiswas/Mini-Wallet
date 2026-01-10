import { formatDate } from "../../utils/formatDate"

function RecentTransactions({ transactions }) {
  if (transactions.length === 0) {
    return <p>No transactions yet</p>
  }

  return (
    <div>
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.slice(0, 10).map(txn => (
          <li key={txn.id}>
            {txn.type.toUpperCase()} - ₹{txn.amount} - {txn.status} - {formatDate(txn.timestamp)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentTransactions
