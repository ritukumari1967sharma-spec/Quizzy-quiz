export default function ProgressBar({ value, max }) {
  return (
    <div className="h-3 rounded-full bg-violet-200 overflow-hidden">
      <div
        className="h-full bg-violet-600 transition-all duration-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
}
