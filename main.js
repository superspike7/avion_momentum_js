import "./style.css";
import User from "./components/user";

if (!localStorage.getItem("name")) {
  const name = prompt("Enter your name");
  localStorage.setItem("name", name);
}

const user = User(localStorage.getItem("name"));
document.querySelector("#center").appendChild(user.element);

const test = User("hello");
console.log(test.name);
test.changeName("world");
console.log(test.name);
