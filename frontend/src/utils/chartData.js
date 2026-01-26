export function getBalanceTimeline(transactions) {
  let balance = 0

  return transactions
    .slice()
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    .map(txn => {
      if (txn.type === "credit") balance += txn.amount
      else balance -= txn.amount

      return {
        date: new Date(txn.timestamp).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
        }),
        balance,
      }
    })
}

export function getCreditDebitTotals(transactions) {
  return transactions.reduce(
    (acc, txn) => {
      if (txn.type === "credit") acc.credit += txn.amount
      else acc.debit += txn.amount
      return acc
    },
    { credit: 0, debit: 0 }
  )
}
