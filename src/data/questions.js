export const CATEGORIES = {
  Science: {
    emoji: "🔬",
    color: "bg-pale-blue-500 hover:bg-pale-blue-600",
    blurb: "Planets, plants and the human body.",
    questions: [
      { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: 1 },
      { q: "Which gas do plants absorb from the air?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2 },
      { q: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
      { q: "Which organ pumps blood around the body?", options: ["Lungs", "Liver", "Brain", "Heart"], answer: 3 },
      { q: "What is the closest star to Earth?", options: ["Sirius", "The Sun", "Polaris", "Alpha Centauri"], answer: 1 },
    ],
  },
  Math: {
    emoji: "➗",
    color: "bg-powder-blue-500 hover:bg-powder-blue-600",
    blurb: "Quick sums, roots and equations.",
    questions: [
      { q: "What is 12 × 8?", options: ["96", "88", "108", "86"], answer: 0 },
      { q: "What is the square root of 144?", options: ["10", "14", "12", "16"], answer: 2 },
      { q: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: 1 },
      { q: "What is π rounded to two decimals?", options: ["3.12", "3.14", "3.16", "3.41"], answer: 1 },
      { q: "Solve for x: 3x + 5 = 20", options: ["3", "4", "5", "6"], answer: 2 },
    ],
  },
};
