import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const inputClass = "w-full rounded-xl border-2 border-violet-100 bg-white px-4 py-3 outline-none focus:border-violet-500";

export default function Login() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = mode === "signup" ? signup(form) : login(form);
    if (err) return setError(err);
    navigate("/");
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8">
      <h1 className="font-display text-3xl font-bold text-violet-800">
        {mode === "login" ? "Welcome back" : "Create an account"}
      </h1>
      <form onSubmit={submit} className="mt-6 space-y-4">
        {mode === "signup" && (
          <input className={inputClass} placeholder="Name" value={form.name} onChange={set("name")} />
        )}
        <input className={inputClass} type="email" placeholder="Email" value={form.email} onChange={set("email")} />
        <input className={inputClass} type="password" placeholder="Password" value={form.password} onChange={set("password")} />
        {error && <p className="text-sm font-semibold text-rose-600">{error}</p>}
        <button className="w-full rounded-full bg-violet-600 py-3 font-bold text-white hover:bg-violet-700">
          {mode === "login" ? "Log in" : "Sign up"}
        </button>
      </form>
      <button onClick={toggleMode} className="mt-4 text-sm text-violet-700 hover:underline">
        {mode === "login" ? "New here? Create an account" : "Already have an account? Log in"}
      </button>
    </div>
  );
}
