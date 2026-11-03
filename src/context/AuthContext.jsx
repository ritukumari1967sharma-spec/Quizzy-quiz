import { createContext, useContext, useState } from "react";
import { load, save, remove } from "../utils/storage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => load("qq_user", null));

  const startSession = (u) => {
    save("qq_user", u);
    setUser(u);
  };

  const signup = ({ name, email, password }) => {
    const users = load("qq_users", []);
    const cleanEmail = email.trim().toLowerCase();
    if (!name.trim() || !cleanEmail || password.length < 6)
      return "Enter a name, an email and a password of at least 6 characters.";
    if (users.some((u) => u.email === cleanEmail)) return "That email is already registered. Try logging in.";
    save("qq_users", [...users, { name: name.trim(), email: cleanEmail, password }]);
    startSession({ name: name.trim(), email: cleanEmail });
    return null;
  };

  const login = ({ email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const found = load("qq_users", []).find((u) => u.email === cleanEmail && u.password === password);
    if (!found) return "Wrong email or password.";
    startSession({ name: found.name, email: found.email });
    return null;
  };

  const logout = () => {
    remove("qq_user");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
