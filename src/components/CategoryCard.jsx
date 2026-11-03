import { Link } from "react-router-dom";

export default function CategoryCard({ name, emoji, color, blurb }) {
  return (
    <Link
      to={`/quiz/${name}`}
      className={`${color} block text-white rounded-3xl p-8 text-left shadow-lg transition active:scale-95`}
    >
      <div className="text-5xl">{emoji}</div>
      <div className="font-display text-3xl font-bold mt-4">{name}</div>
      <div className="mt-1 text-white/90">{blurb}</div>
    </Link>
  );
}
