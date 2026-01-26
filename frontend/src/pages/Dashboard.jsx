import { useMemo } from "react"
import { useTransactions } from "../hooks/useTransactions"
import { useBalance } from "../hooks/useBalance"
import BalanceCard from "../components/dashboard/BalanceCard"
import CreditDebitDonut from "../components/charts/CreditDebitDonut"
import CreditDebitStats from "../components/dashboard/CreditDebitStats"
import RecentTransactions from "../components/dashboard/RecentTransactions"

function Dashboard() {
  const { transactions, loading, error } = useTransactions()
  const balance = useBalance(transactions)

  const { credit, debit } = useMemo(() => {
    return transactions.reduce(
      (acc, txn) => {
        if (txn.status !== "success") return acc

        if (txn.type === "credit") {
          acc.credit += txn.amount
        } else if (txn.type === "debit") {
          acc.debit += txn.amount + (txn.fee || 0)
        }

        return acc
      },
      { credit: 0, debit: 0 }
    )
  }, [transactions])

  if (loading) {
    return <p className="text-slate-400">Loading dashboard...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="text-slate-400">
          Manage your wallet and track your transactions
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        <BalanceCard
          balance={balance}
          transactions={transactions}
        />

        <div className="lg:col-span-2">
          <CreditDebitDonut
            credit={credit}
            debit={debit}
          />
        </div>

        <CreditDebitStats
          credit={credit}
          debit={debit}
        />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions transactions={transactions} />
    </div>
  )
}

export default Dashboard
