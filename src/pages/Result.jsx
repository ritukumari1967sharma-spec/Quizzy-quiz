import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const secondary = "rounded-full bg-violet-100 px-6 py-2.5 font-bold text-violet-800 hover:bg-violet-200";

export default function Result() {
  const { state } = useLocation();
  const { user } = useAuth();

  // Opened directly (e.g. page refresh) with no quiz result
  if (!state) return <Navigate to="/" replace />;

  const { category, score, total } = state;
  const message = score === total ? "Perfect score!" : score >= total / 2 ? "Nice work!" : "Keep practising!";

  return (
    <div className="text-center bg-white rounded-3xl shadow-lg p-10">
      <p className="text-violet-700 font-semibold">{category} quiz finished</p>
      <div className="font-display text-8xl font-bold text-violet-800 mt-2">{score}/{total}</div>
      <p className="text-2xl font-semibold mt-2">{message}</p>
      <p className="mt-2 text-slate-500">
        {user ? "Your score was added to the leaderboard." : "Log in to put your score on the leaderboard."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to={`/quiz/${category}`} className="rounded-full bg-violet-600 px-6 py-2.5 font-bold text-white hover:bg-violet-700">
          Try again
        </Link>
        <Link to="/" className={secondary}>Choose category</Link>
        <Link to="/leaderboard" className={secondary}>Leaderboard</Link>
      </div>
    </div>
  );
}
