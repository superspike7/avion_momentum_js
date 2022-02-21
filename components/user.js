function User(name) {
  if (!localStorage.getItem("userName")) {
    setName(name);
  }

  function setName(newName) {
    localStorage.setItem("userName", newName);
    console.log(getName());
  }

  function getName() {
    return localStorage.getItem("userName");
  }

  return {
    getName: getName(),
    changeName: setName,
  };
}

export default User;
