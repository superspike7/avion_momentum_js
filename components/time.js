function Time() {
  function getElement() {
    const element = document.createElement("div");
    element.textContent = new Date().toLocaleTimeString("en-US");
    element.setAttribute("id", "time");
    element.classList.add(
      "text-gray-100",
      "text-8xl",
      "font-semibold",
      "text-center",
      "self-center"
    );
    return element;
  }

  function render() {
    document.querySelector("#center").appendChild(getElement());
    setInterval(() => {
      document.querySelector("#time").textContent =
        new Date().toLocaleTimeString("en-US");
    }, 1000);
  }

  return {
    render,
  };
}

export default Time;
