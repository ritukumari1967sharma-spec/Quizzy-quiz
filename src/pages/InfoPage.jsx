export default function InfoPage({ title, text }) {
  return (
    <div className="bg-white rounded-3xl shadow p-8">
      <h1 className="font-display text-4xl font-bold text-violet-800">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}
