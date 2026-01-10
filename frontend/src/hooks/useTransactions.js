import { useEffect, useState } from "react"
import { getTransactions } from "../api/transactions.api"

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTransactions()
      .then(res => setTransactions(res.data))
      .catch(() => setError("Failed to load transactions"))
      .finally(() => setLoading(false))
  }, [])

  return { transactions, loading, error }
}
