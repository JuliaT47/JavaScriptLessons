import ToDoList from "./ToDoList";

const RenderComponent = () => {
  const toDo = [
    { id: 1, todo: "First" },
    { id: 2, todo: "Second" },
    { id: 3, todo: "Third" },
    { id: 4, todo: "Fourth" },
  ];
  return (
    <div>
      {toDo.map((todo) => {
        return <ToDoList key={todo.id} todo={todo.todo} />;
      })}
    </div>
  );
};

export default RenderComponent;
