import { useMemo } from "react"
import { calculateBalance } from "../utils/calculateBalance"

export const useBalance = (transactions) => {
  return useMemo(() => {
    return calculateBalance(transactions)
  }, [transactions])
}
