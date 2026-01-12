import { useState } from "react"
import { useCreateTransaction } from "../hooks/useCreateTransaction"
import { useNavigate } from "react-router-dom"

function AddMoney() {
  const [amount, setAmount] = useState("")
  const navigate = useNavigate()

  const { createTransaction, loading } = useCreateTransaction(() =>
    navigate("/")
  )

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      return
    }

    createTransaction({
      type: "credit",
      amount: Number(amount),
      status: "success",
      sender: "Self",
      from: "Self",
    })

  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Add Money</h2>
        <p className="text-slate-400 text-sm">
          Add funds to your wallet
        </p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2"
        />

        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 py-2 rounded-lg font-medium"
        >
          {loading ? "Processing..." : "Add Money"}
        </button>
      </div>
    </div>
  )
}

export default AddMoney
