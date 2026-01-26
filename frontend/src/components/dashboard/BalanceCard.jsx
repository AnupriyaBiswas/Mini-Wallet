import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts"
import { getBalanceTimeline } from "../../utils/chartData"

function BalanceCard({ balance, transactions = [] }) {
  const timeline = getBalanceTimeline(transactions)
  const isNegative = balance < 0

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 h-full flex flex-col justify-between">
      {/* Top */}
      <div>
        <h3 className="text-sm text-slate-400">
          Wallet Balance
        </h3>

        <div
          className={`mt-1 text-3xl font-bold ${
            isNegative ? "text-red-400" : "text-emerald-400"
          }`}
        >
          ₹ {balance}
        </div>
      </div>

      {/* Sparkline */}
      {timeline.length > 1 && (
        <div className="mt-4 h-14">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeline}>
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#34d399"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default BalanceCard
