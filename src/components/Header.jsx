import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const linkClass = ({ isActive }) =>
  `px-3 py-1.5 rounded-full text-sm font-semibold transition ${
    isActive ? "bg-violet-600 text-white" : "text-deep-blue-900 hover:bg-violet-200"
  }`;

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white/80 backdrop-blur border-b border-violet-100 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <Link to="/" className="font-display text-2xl font-bold text-deep-blue-700">
          Quizzy Quiz
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/leaderboard" className={linkClass}>Leaderboard</NavLink>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-full text-sm font-semibold text-rose-600 hover:bg-rose-50"
            >
              Log out ({user.name})
            </button>
          ) : (
            <NavLink to="/login" className={linkClass}>Login</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
