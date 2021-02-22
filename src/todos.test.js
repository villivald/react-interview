import todos from "./constants/todos";

for (let i = 0; i < todos.length; i++) {
  test(`Task [${i}] should have properties (id, name, complete)`, () => {
    expect(todos[i]).toHaveProperty("id");
    expect(todos[i]).toHaveProperty("name");
    expect(todos[i]).toHaveProperty("complete");
  });
}
