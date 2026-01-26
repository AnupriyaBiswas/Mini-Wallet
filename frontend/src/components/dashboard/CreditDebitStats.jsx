import creditIcon from "../../assets/credit.png"
import debitIcon from "../../assets/debit.png"

function CreditDebitStats({ credit, debit }) {
  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      {/* Total Credit */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
        <img
          src={creditIcon}
          alt="Credit"
          className="h-10 w-10"
        />

        <div className="flex flex-col">
          <p className="text-xs text-slate-400">
            Total Credit
          </p>
          <p className="text-lg font-semibold text-emerald-400">
            ₹ {credit}
          </p>
        </div>
      </div>

      {/* Total Debit */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
        <img
          src={debitIcon}
          alt="Debit"
          className="h-10 w-10"
        />

        <div className="flex flex-col">
          <p className="text-xs text-slate-400">
            Total Debit
          </p>
          <p className="text-lg font-semibold text-red-400">
            ₹ {debit}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreditDebitStats
