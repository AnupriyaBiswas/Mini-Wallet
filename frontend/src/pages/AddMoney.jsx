import { useState } from "react"
import { addTransaction } from "../api/transactions.api"
import { TRANSACTION_STATUS } from "../constants/transactionStatus"
import toast from "react-hot-toast"

function AddMoney() {
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!amount || amount <= 0) {
      toast.error("Enter valid amount")
      return
    }

    setLoading(true)

    await addTransaction({
      type: "credit",
      amount: Number(amount),
      fee: 0,
      status: TRANSACTION_STATUS.SUCCESS,
      timestamp: new Date().toISOString()
    })

    setAmount("")
    setLoading(false)
    toast.success("Money added successfully")
  }

  return (
    <div>
      <h2>Add Money</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Money"}
        </button>
      </form>
    </div>
  )
}

export default AddMoney
