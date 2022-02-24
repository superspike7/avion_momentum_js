import "./style.css";
import User from "./components/user";
import Time from "./components/time";
import { focusInputHandler } from "./components/mainFocus";
import renderQuote from "./components/quote";
import { renderTodo } from "./components/todo";

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

const todos = [{ task: "hello", status: "pending" }];

function toggleTodo() {
  document.querySelector("#todo-list").classList.toggle("hidden");
}

document.querySelector("#todo-toggle").addEventListener("click", toggleTodo);

renderTodo(todos);

document.querySelector("#todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.firstElementChild;
  todos.push({ task: input.value, status: "pending" });
  input.value = "";
  renderTodo(todos);
  console.log(todos);
});

document.querySelectorAll("[data-index]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    const newTodo = todos.filter((el, i) => i !== index);
    console.log(newTodo);
  });
});
