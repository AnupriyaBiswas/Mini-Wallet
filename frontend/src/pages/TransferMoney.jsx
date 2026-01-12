import { useState } from "react"
import { useCreateTransaction } from "../hooks/useCreateTransaction"
import { useNavigate } from "react-router-dom"

function TransferMoney() {
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const navigate = useNavigate()

  const { createTransaction, loading } = useCreateTransaction(() =>
    navigate("/")
  )

  const handleSubmit = () => {
    if (!recipient || !amount || amount <= 0) return

    createTransaction({
      type: "debit",
      amount: Number(amount),
      status: "success",

      // IMPORTANT: send both keys for backend compatibility
      recipient,
      to: recipient,
    })
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Transfer Money</h2>
        <p className="text-slate-400 text-sm">
          Send money to another user
        </p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient name"
          className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 text-slate-100"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 text-slate-100"
        />

        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50 py-2 rounded-lg font-medium"
        >
          {loading ? "Processing..." : "Transfer Money"}
        </button>
      </div>
    </div>
  )
}

export default TransferMoney
