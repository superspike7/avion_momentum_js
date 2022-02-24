export default function renderQuote(quotes) {
  const target = document.querySelector("#quote-text");
  target.classList.add("text-gray-100");
  target.textContent = `"${quotes[quotes.length - 1]}"`;
}
