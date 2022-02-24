function User(name) {
  function getElement() {
    const element = document.createElement("div");
    element.textContent = `Good Morning, ${name}`;
    element.classList.add(
      "text-gray-100",
      "text-5xl",
      "font-bold",
      "text-center",
      "self-center"
    );
    return element;
  }

  function changeName(newName) {
    this.name = newName;
  }

  return {
    name,
    element: getElement(),
    changeName,
  };
}

export default User;
