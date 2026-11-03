import { getScores } from "../utils/storage";

export default function Leaderboard() {
  const rows = getScores().sort((a, b) => b.score - a.score).slice(0, 10);

  return (
    <div>
      <h1 className="font-display text-4xl font-bold text-violet-800">Leaderboard</h1>
      {rows.length === 0 ? (
        <p className="mt-6 text-slate-600">No scores yet. Log in, take a quiz and be the first on the board.</p>
      ) : (
        <div className="mt-6 bg-white rounded-3xl shadow overflow-hidden">
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-violet-50 last:border-0">
              <span className="w-8 font-display text-xl font-bold text-violet-600">{i + 1}</span>
              <div className="flex-1">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-slate-500">{r.category} · {r.date}</div>
              </div>
              <span className="font-display text-xl font-bold">{r.score}/5</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
