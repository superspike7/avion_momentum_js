import User from "../components/user.js";

describe("User class", () => {
  it("should add name when initializing", () => {
    const user = User("Spike");
    expect(user.getName).toBe("Spike");
  });

  it("should be able to rename user", () => {
    const user = User("Spike");
    user.setName("Vinz");
    expect(user.getName).toBe("Vinz");
  });
});
