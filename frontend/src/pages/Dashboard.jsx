import { useTransactions } from "../hooks/useTransactions"
import { useBalance } from "../hooks/useBalance"
import BalanceCard from "../components/dashboard/BalanceCard"
import RecentTransactions from "../components/dashboard/RecentTransactions"

function Dashboard() {
  const { transactions, loading, error } = useTransactions()
  const balance = useBalance(transactions)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Dashboard</h2>
      <BalanceCard balance={balance} />
      <RecentTransactions transactions={transactions} />
    </div>
  )
}

export default Dashboard
