import { calculateBalance } from "../utils/calculateBalance"

test("calculates balance correctly", () => {
  const txns = [
    { type: "credit", amount: 1000, status: "success" },
    { type: "debit", amount: 200, fee: 10, status: "success" }
  ]

  expect(calculateBalance(txns)).toBe(790)
})
