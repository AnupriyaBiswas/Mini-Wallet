export const calculateBalance = (transactions) => {
  return transactions.reduce((balance, txn) => {
    if (txn.status !== "success") return balance

    if (txn.type === "credit") {
      return balance + txn.amount
    }

    if (txn.type === "debit") {
      return balance - txn.amount - (txn.fee || 0)
    }

    return balance
  }, 0)
}
