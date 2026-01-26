import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const COLORS = ["#34d399", "#f87171"]

function CreditDebitDonut({ credit, debit }) {
  const data = [
    { name: "Credit", value: credit },
    { name: "Debit", value: debit },
  ]

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 h-full">
      <h3 className="text-base font-semibold mb-3">
        Credit vs Debit
      </h3>

      <div className="h-48 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CreditDebitDonut
