const quotes = [
  { text: "Belive Your Self", author: "Dario" }, // Kept as requested
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Teddy Roosevelt",
  },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("button");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteText.textContent = `" ${randomQuote.text} "`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
}

quoteButton.addEventListener("click", generateQuote);
generateQuote();
