import { useState } from "react"
import { formatDate } from "../../utils/formatDate"
import TransactionDrawer from "../transactions/TransactionDrawer"

function RecentTransactions({ transactions }) {
  const [selectedTxn, setSelectedTxn] = useState(null)

  if (transactions.length === 0) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-slate-400">
        No transactions yet
      </div>
    )
  }

  return (
    <>
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-slate-100">
            Recent Transactions
          </h3>
        </div>

        <ul className="divide-y divide-slate-700">
          {transactions.slice(0, 10).map(txn => {
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
                      isCredit ? "text-emerald-400" : "text-red-400"
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
                      isCredit ? "text-emerald-400" : "text-red-400"
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
      </div>

      <TransactionDrawer
        transaction={selectedTxn}
        onClose={() => setSelectedTxn(null)}
      />
    </>
  )
}

export default RecentTransactions
