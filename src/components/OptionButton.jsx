// status: "idle" | "correct" | "wrong" | "faded"
const STYLES = {
  idle: "bg-white border-violet-100 hover:border-violet-400 hover:bg-violet-50",
  correct: "bg-emerald-100 border-emerald-500 text-emerald-900",
  wrong: "bg-rose-100 border-rose-500 text-rose-900",
  faded: "bg-white border-violet-100 opacity-50",
};

export default function OptionButton({ label, status, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl border-2 px-5 py-4 font-semibold transition ${STYLES[status]}`}
    >
      {label}
    </button>
  );
}
