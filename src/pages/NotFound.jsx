import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="font-display text-6xl font-bold text-violet-800">404</h1>
      <p className="mt-3 text-lg text-slate-600">This page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-violet-600 px-6 py-2.5 font-bold text-white hover:bg-violet-700">
        Back to home
      </Link>
    </div>
  );
}
