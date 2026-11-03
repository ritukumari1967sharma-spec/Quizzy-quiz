import CategoryCard from "../components/CategoryCard.jsx";
import { CATEGORIES } from "../data/questions";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="font-display text-5xl sm:text-6xl font-bold text-azure-800">Ready to test yourself?</h1>
      <p className="mt-3 text-lg text-slate-600">Pick a category. Five questions, no timer.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {Object.entries(CATEGORIES).map(([name, c]) => (
          <CategoryCard key={name} name={name} {...c} />
        ))}
      </div>
    </div>
  );
}
