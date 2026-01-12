import { useState } from "react"
import { addTransaction } from "../api/transactions.api"
import toast from "react-hot-toast"

export function useCreateTransaction(onSuccess) {
  const [loading, setLoading] = useState(false)

  const createTransaction = async (payload) => {
    try {
      setLoading(true)

      const enrichedPayload = {
        ...payload,
        timestamp: new Date().toISOString(),
      }

      await addTransaction(enrichedPayload)

      toast.success("Transaction successful")

      if (onSuccess) onSuccess()
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Transaction failed"
      )
    } finally {
      setLoading(false)
    }
  }

  return { createTransaction, loading }
}
