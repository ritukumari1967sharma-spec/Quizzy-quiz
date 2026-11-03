export const load = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

export const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const remove = (key) => localStorage.removeItem(key);

export const getScores = () => load("qq_scores", []);

export const addScore = (entry) => save("qq_scores", [...getScores(), entry]);
