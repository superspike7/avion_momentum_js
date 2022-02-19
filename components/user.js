function User(name) {
  function setName(newName) {
    name = newName;
  }
  return {
    getName: name,
    setName: setName,
  };
}

export default User;
