import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Add Money", path: "/add" },
  { name: "Transfer", path: "/transfer" },
  { name: "Transactions", path: "/transactions" },
]

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      {/* LEFT: Brand */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Mini Wallet Logo"
          className="h-9 w-9 rounded-lg"
        />
        <span className="text-xl font-bold tracking-wide text-slate-100">
          Mini Wallet
        </span>
      </div>

      {/* CENTER: Navigation */}
      <div className="flex gap-8">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `
              text-sm font-medium transition
              ${
                isActive
                  ? "text-emerald-400"
                  : "text-slate-400 hover:text-slate-200"
              }
            `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* RIGHT: User Info */}
      <div className="flex items-center gap-3">
        <div className="text-right leading-tight">
          <p className="text-sm font-medium text-slate-100">
            Anupriya Biswas
          </p>
          <p className="text-xs text-slate-400">
            Wallet User
          </p>
        </div>

        <img
          src="https://ui-avatars.com/api/?name=A&background=0D8ABC&color=fff"
          alt="User Avatar"
          className="h-9 w-9 rounded-full border border-slate-700"
        />
      </div>
    </nav>
  )
}

export default Navbar
