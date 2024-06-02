export default function Form({ todos, setTodos, todo, setTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name !== "") {
      setTodos([...todos, todo]);
      setTodo({ name: "", isComplete: false });
    }
  }
  return (
    <div className="md:w-2/5 md:mx-auto p-2 pt-10">
      <form
        className="flex justify-between items-center"
        onClick={handleSubmit}
      >
        <input
          className="w-5/6 p-3 rounded-xl bg-stone-700 outline-none font-bold text-lg text-stone-400 placeholder:text-stone-400"
          onChange={(e) => setTodo({ name: e.target.value, isComplete: false })}
          type="text"
          placeholder="Какая задача на сегодня?"
          value={todo.name}
        />
        <button
          className="1/6 px-4 py-2 rounded-full bg-red-600 font-bold text-black text-2xl hover:bg-red-700"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}
