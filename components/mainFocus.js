function MainFocus(task, status = "pending") {
  function markDone() {
    this.status = "done";
  }

  function render() {
    const element = document.createElement("div");
    element.innerHTML = mainFocusTemplate({
      task: this.task,
      status: this.status,
    });
    document.querySelector("#bottom").appendChild(element);
    document.querySelector("#checkbox").addEventListener("change", (e) => {
      let text = document.querySelector("#focus-text");
      if (e.target.checked) {
        text.classList.add("line-through");
      } else {
        text.classList.remove("line-through");
      }
    });
    document.querySelector("#close-focus").addEventListener("click", () => {
      document.querySelector("#focus-form").classList.remove("hidden");
      const select = document.querySelector("#bottom");
      select.removeChild(select.lastChild);
    });
  }

  return {
    task,
    status,
    markDone: markDone,
    render,
  };
}

function mainFocusTemplate(props) {
  return `
        <div class="text-gray-100 text-center">
          <p class="text-2xl">TODAY</p>
          <div class="flex justify-center gap-4 mt-4">
            <span id="checkbox"
              ><input
                class="block h-full w-6"
                type="checkbox"
                name="focusCheckbox"
                value=""
            /></span>
            <p id="focus-text" class="text-2xl">${props.task}</p>
            <span id="close-focus" class="cursor-pointer ${
              props.status === "done" ? "line-through" : "no-underline"
            } text-2xl">X</span>
          </div>
        </div>
    `;
}

function focusInputHandler(e) {
  e.preventDefault();
  const value = e.srcElement.firstElementChild.lastElementChild.value;
  const formElement = e.srcElement;
  formElement.classList.add("hidden");

  const mainFocus = MainFocus(value);

  mainFocus.render();
}

export default MainFocus;
export { focusInputHandler };
