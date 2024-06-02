import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import clsx from "clsx";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleComplete(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(newArray);
  }
  const buttonComplete = item.isComplete ? (
    <IoCheckmarkOutline className="text-green-700" />
  ) : (
    ""
  );
  return (
    <div className="p-4 border-2 font-bold text-xl border-stone-500 rounded-xl flex justify-between">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleComplete(item.name)}
          className="p-2 border-2 border-stone-500 rounded-xl"
        >
          {buttonComplete}
        </button>
        <h3
          className={clsx({ "line-through": item.isComplete === true })}
          onClick={() => handleComplete(item.name)}
        >
          {item.name}
        </h3>
      </div>

      <button className="hover:text-red-500" onClick={() => handleDelete(item)}>
        <MdDeleteForever />
      </button>
    </div>
  );
}
