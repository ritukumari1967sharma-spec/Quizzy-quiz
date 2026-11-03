# Quizzy Quiz

React + Tailwind CSS + React Router quiz app.

## Run
    npm install
    npm run dev
Open http://localhost:5173

## Structure
    src/
      main.jsx            entry: BrowserRouter + AuthProvider
      App.jsx             all routes
      components/         Layout, Header, Footer, CategoryCard, ProgressBar, OptionButton
      pages/              Home, Quiz, Result, Leaderboard, Login, InfoPage, NotFound
      context/            AuthContext (login, signup, logout)
      data/               questions.js, info.js
      utils/              storage.js (localStorage helpers)
