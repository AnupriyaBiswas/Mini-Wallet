import { useEffect, useState } from "react"
import { getConfig } from "../api/config.api"

export const useConfig = () => {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getConfig()
      .then(res => setConfig(res.data))
      .finally(() => setLoading(false))
  }, [])

  return { config, loading }
}
