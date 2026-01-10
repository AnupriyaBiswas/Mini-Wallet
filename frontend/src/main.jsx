import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from "./components/common/ErrorBoundary"
import { Toaster } from "react-hot-toast"


ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <>
      <App />
      <Toaster position="top-right" />
    </>

  </ErrorBoundary>

)
