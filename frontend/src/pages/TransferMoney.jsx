import { useState, useEffect } from "react"
import { useCreateTransaction } from "../hooks/useCreateTransaction"
import { useNavigate } from "react-router-dom"
import { getUsers } from "../api/users.api"
import toast from "react-hot-toast"

function TransferMoney() {
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [validUsers, setValidUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  const { createTransaction, loading } = useCreateTransaction(() =>
    navigate("/")
  )

  // Fetch valid users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers()
        setValidUsers(response.data)
      } catch (error) {
        console.error("Failed to fetch users:", error)
      }
    }
    fetchUsers()
  }, [])

  // Filter users based on input
  const handleRecipientChange = (e) => {
    const value = e.target.value
    setRecipient(value)

    if (value.trim()) {
      const filtered = validUsers.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredUsers(filtered)
      setShowDropdown(true)
    } else {
      setFilteredUsers([])
      setShowDropdown(false)
    }
  }

  // Handle user selection from dropdown
  const handleSelectUser = (selectedUser) => {
    setRecipient(selectedUser.name)
    setShowDropdown(false)
    setFilteredUsers([])
  }

  const handleSubmit = () => {
    // Check if recipient is valid
    const isValidRecipient = validUsers.some(
      (user) => user.name.toLowerCase() === recipient.toLowerCase()
    )

    if (!isValidRecipient) {
      toast.error("Enter a valid username")
      return
    }

    if (!recipient || !amount || amount <= 0) return

    createTransaction({
      type: "debit",
      amount: Number(amount),
      status: "success",
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
        <div className="relative">
          <input
            type="text"
            value={recipient}
            onChange={handleRecipientChange}
            onFocus={() => recipient.trim() && setShowDropdown(true)}
            placeholder="Recipient name"
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 text-slate-100"
          />

          {/* Dropdown */}
          {showDropdown && filteredUsers.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-slate-900 border border-slate-700 rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleSelectUser(user)}
                  className="px-4 py-2 hover:bg-slate-800 cursor-pointer text-slate-100"
                >
                  {user.name}
                </div>
              ))}
            </div>
          )}
        </div>

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
