import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
        <Link to="/contact" className="hover:text-violet-700">Contact</Link>
        <Link to="/terms" className="hover:text-violet-700">Term & Condition</Link>
        <Link to="/blog" className="hover:text-violet-700">Blog</Link>
      </div>
    </footer>
  );
}
