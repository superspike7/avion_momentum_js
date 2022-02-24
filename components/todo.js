export function renderTodo(todoList) {
  const li = document.createElement("li");
  const list = document.createElement("ul");
  li.classList.add(
    "flex",
    "text-gray-100",
    "justify-center",
    "gap-5",
    "text-xl"
  );
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const task = document.createElement("p");
  const remove = document.createElement("p");
  remove.textContent = "X";
  remove.classList.add("cursor-pointer");

  todoList.forEach((element, index) => {
    task.textContent = element.task;
    remove.setAttribute("data-index", index);
    li.appendChild(checkbox);
    li.appendChild(task);
    li.appendChild(remove);
    list.appendChild(li);
  });

  document.querySelector("#todo-list").appendChild(list);
}
