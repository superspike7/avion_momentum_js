import "./style.css";
import User from "./components/user";
import Time from "./components/time";
import MainFocus, { focusInputHandler } from "./components/mainFocus";

Time().render();

if (!localStorage.getItem("name")) {
  const name = prompt("Enter your name");
  localStorage.setItem("name", name);
}
const user = User(localStorage.getItem("name"));
document.querySelector("#center").appendChild(user.element);

const focusForm = document.querySelector("#focus-form");
focusForm.addEventListener("submit", focusInputHandler);
