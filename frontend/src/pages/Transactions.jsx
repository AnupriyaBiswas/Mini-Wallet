import { useState } from "react"
import { useTransactions } from "../hooks/useTransactions"
import { formatDate } from "../utils/formatDate"
import TransactionDrawer from "../components/transactions/TransactionDrawer"

function Transactions() {
  const { transactions, loading, error } = useTransactions()
  const [selectedTxn, setSelectedTxn] = useState(null)

  if (loading) return <p className="text-slate-400">Loading transactions...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h2 className="text-2xl font-bold">Transactions</h2>
          <p className="text-slate-400 text-sm">
            Complete history of wallet activity
          </p>
        </div>

        {/* Transactions Card (same as Dashboard) */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          {transactions.length === 0 ? (
            <p className="p-6 text-slate-400">No transactions yet</p>
          ) : (
            <ul className="divide-y divide-slate-700">
              {transactions.map(txn => {
                const isCredit = txn.type === "credit"

                const counterparty = isCredit
                  ? txn.sender || txn.from
                  : txn.recipient || txn.to

                const title = isCredit
                  ? counterparty
                    ? `From ${counterparty}`
                    : "Credit"
                  : counterparty
                    ? `To ${counterparty}`
                    : "Debit"

                return (
                  <li
                    key={txn.id}
                    onClick={() => setSelectedTxn(txn)}
                    className="p-6 flex justify-between items-center cursor-pointer hover:bg-slate-700/40"
                  >
                    <div>
                      <p
                        className={`font-medium ${
                          isCredit
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {title}
                      </p>
                      <p className="text-sm text-slate-400">
                        {formatDate(txn.timestamp)}
                      </p>
                    </div>

                    <div className="text-right">
                      <p
                        className={`font-semibold ${
                          isCredit
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        ₹ {txn.amount}
                      </p>
                      <p className="text-xs text-slate-400">
                        {txn.status}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Transaction Details Drawer */}
      <TransactionDrawer
        transaction={selectedTxn}
        onClose={() => setSelectedTxn(null)}
      />
    </>
  )
}

export default Transactions
