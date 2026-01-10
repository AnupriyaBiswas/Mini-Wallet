import axiosInstance from "./axiosInstance"

export const getTransactions = () =>
  axiosInstance.get("/transactions")

export const addTransaction = (data) =>
  axiosInstance.post("/transactions", data)

export const deleteTransaction = (id) =>
  axiosInstance.delete(`/transactions/${id}`)
