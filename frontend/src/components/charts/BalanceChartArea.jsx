import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function BalanceAreaChart({ data }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">
        Balance Over Time
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#34d399"
              fill="#34d39933"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BalanceAreaChart
