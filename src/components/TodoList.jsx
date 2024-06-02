import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.isComplete) - Number(b.isComplete));
  return (
    <div className="md:w-2/5 md:mx-auto p-2 pt-5 space-y-4">
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
