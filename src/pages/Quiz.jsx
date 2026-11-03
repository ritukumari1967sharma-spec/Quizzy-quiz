import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CATEGORIES } from "../data/questions";
import { useAuth } from "../context/AuthContext";
import { addScore } from "../utils/storage";
import ProgressBar from "../components/ProgressBar.jsx";
import OptionButton from "../components/OptionButton.jsx";

export default function Quiz() {
  const { category } = useParams();
  const data = CATEGORIES[category];
  if (!data) return <Navigate to="/" replace />;
  // key resets the quiz when the category changes
  return <QuizRunner key={category} category={category} questions={data.questions} />;
}

function QuizRunner({ category, questions }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const q = questions[index];
  const isLast = index + 1 === questions.length;

  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (!isLast) {
      setIndex(index + 1);
      setPicked(null);
      return;
    }
    if (user) {
      addScore({ name: user.name, category, score, date: new Date().toLocaleDateString() });
    }
    navigate("/result", { state: { category, score, total: questions.length } });
  };

  const statusOf = (i) => {
    if (picked === null) return "idle";
    if (i === q.answer) return "correct";
    if (i === picked) return "wrong";
    return "faded";
  };

  return (
    <div>
      <div className="flex justify-between text-sm font-semibold text-violet-700 mb-2">
        <span>{category}</span>
        <span>Question {index + 1} of {questions.length}</span>
      </div>
      <ProgressBar value={index + (picked !== null ? 1 : 0)} max={questions.length} />

      <h2 className="font-display text-3xl font-semibold mt-8">{q.q}</h2>
      <div className="mt-6 space-y-3">
        {q.options.map((opt, i) => (
          <OptionButton key={opt} label={opt} status={statusOf(i)} onClick={() => choose(i)} />
        ))}
      </div>

      {picked !== null && (
        <div className="mt-6 flex items-center justify-between">
          <p className={`font-semibold ${picked === q.answer ? "text-emerald-600" : "text-rose-600"}`}>
            {picked === q.answer ? "Correct!" : `Not quite. The answer is ${q.options[q.answer]}.`}
          </p>
          <button onClick={next} className="rounded-full bg-violet-600 px-6 py-2.5 font-bold text-white hover:bg-violet-700">
            {isLast ? "See results" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
