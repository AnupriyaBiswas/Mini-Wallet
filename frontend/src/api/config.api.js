import axiosInstance from "./axiosInstance"

export const getConfig = () =>
  axiosInstance.get("/config")
