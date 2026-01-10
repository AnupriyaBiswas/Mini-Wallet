import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AddMoney from "./pages/AddMoney"
import TransferMoney from "./pages/TransferMoney"
import Transactions from "./pages/Transactions"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddMoney />} />
        <Route path="/transfer" element={<TransferMoney />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
