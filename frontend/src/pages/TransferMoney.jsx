import { useEffect, useState } from "react"
import { getUsers } from "../api/users.api"
import { addTransaction } from "../api/transactions.api"
import { TRANSACTION_STATUS } from "../constants/transactionStatus"
import { useConfig } from "../hooks/useConfig"
import toast from "react-hot-toast"


function TransferMoney() {
  const [users, setUsers] = useState([])
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const { config, loading: configLoading } = useConfig()

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])

  if (configLoading) return <p>Loading config...</p>

  const fee = (amount * config.feePercentage) / 100

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!recipient || !amount) {
      alert("Fill all fields")
      return
    }

    if (amount > config.maxLimit) {
      toast.error("Amount exceeds transaction limit")
      return
    }

    const confirm = window.confirm(
      `Transfer ₹${amount} with fee ₹${fee}?`
    )

    if (!confirm) return

    setLoading(true)

    await addTransaction({
      type: "debit",
      amount: Number(amount),
      fee: Number(fee),
      recipient,
      status: TRANSACTION_STATUS.SUCCESS,
      timestamp: new Date().toISOString()
    })

    setRecipient("")
    setAmount("")
    setLoading(false)

    toast.success("Transfer successful")
  }

  return (
    <div>
      <h2>Transfer Money</h2>

      <form onSubmit={handleSubmit}>
        <select
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
        >
          <option value="">Select recipient</option>
          {users.map(user => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <p>Fee: ₹{fee || 0}</p>

        <button type="submit" disabled={loading}>
          {loading ? "Transferring..." : "Transfer"}
        </button>
      </form>
    </div>
  )
}

export default TransferMoney
