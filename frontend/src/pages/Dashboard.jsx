import { useTransactions } from "../hooks/useTransactions"
import { useBalance } from "../hooks/useBalance"
import BalanceCard from "../components/dashboard/BalanceCard"
import RecentTransactions from "../components/dashboard/RecentTransactions"

function Dashboard() {
  const { transactions, loading, error } = useTransactions()
  const balance = useBalance(transactions)

  if (loading) {
    return <p className="text-gray-500">Loading dashboard...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-gray-600">
          A quick snapshot of your wallet activity
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BalanceCard balance={balance} />
      </div>

      {/* Transactions */}
      <RecentTransactions transactions={transactions} />
    </div>
  )
}

export default Dashboard
