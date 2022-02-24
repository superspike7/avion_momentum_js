import "./style.css";
import User from "./components/user";
import Time from "./components/time";

if (!localStorage.getItem("name")) {
  const name = prompt("Enter your name");
  localStorage.setItem("name", name);
}

const center = document.querySelector("#center");

const user = User(localStorage.getItem("name"));

Time().render();
center.appendChild(user.element);
