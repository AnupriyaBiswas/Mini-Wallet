import { formatDate } from "../../utils/formatDate"

function TransactionDrawer({ transaction, onClose }) {
  if (!transaction) return null

  const isCredit = transaction.type === "credit"

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-700 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">
            Transaction Details
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <Detail label="Type">
            <span
              className={isCredit ? "text-emerald-400" : "text-red-400"}
            >
              {transaction.type.toUpperCase()}
            </span>
          </Detail>

          <Detail label="Amount">
            ₹ {transaction.amount}
          </Detail>

          {transaction.sender && (
            <Detail label="From">
              {transaction.sender}
            </Detail>
          )}

          {transaction.recipient && (
            <Detail label="To">
              {transaction.recipient}
            </Detail>
          )}

          <Detail label="Status">
            {transaction.status}
          </Detail>

          <Detail label="Date">
            {formatDate(transaction.timestamp)}
          </Detail>

          <Detail label="Transaction ID">
            {transaction.id}
          </Detail>
        </div>
      </div>
    </div>
  )
}

function Detail({ label, children }) {
  return (
    <div>
      <p className="text-slate-400">{label}</p>
      <p className="text-slate-100 font-medium">{children}</p>
    </div>
  )
}

export default TransactionDrawer
