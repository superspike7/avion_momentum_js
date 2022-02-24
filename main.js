import "./style.css";
import User from "./components/user";
import Time from "./components/time";
import { focusInputHandler } from "./components/mainFocus";
import renderQuote from "./components/quote";

Time().render();

if (!localStorage.getItem("name")) {
  const name = prompt("Enter your name");
  localStorage.setItem("name", name);
}
const user = User(localStorage.getItem("name"));
document.querySelector("#center").appendChild(user.element);

const focusForm = document.querySelector("#focus-form");
focusForm.addEventListener("submit", focusInputHandler);

const quotes = [
  "You can't learn what you think you have already learned",
  "focus on the task",
];

renderQuote(quotes);

function addQuote() {
  const newQuote = prompt("add new quote");
  quotes.push(newQuote);
  renderQuote(quotes);
}

document.querySelector("#add-quote").addEventListener("click", addQuote);
