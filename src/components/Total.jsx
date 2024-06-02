export default function Total({ totalComplete, totalTodos }) {
  return (
    <div className="md:w-2/5 md:mx-auto p-2">
      <div className="flex justify-between items-center md:px-20 py-5 border-2 border-stone-500 rounded-xl">
        <h3 className="text-3xl font-bold text-stone-500">Выполнено задач</h3>
        <h3 className="text-3xl font-bold text-neutral-950 bg-red-600 rounded-full p-10">
          {totalComplete}/{totalTodos}
        </h3>
      </div>
    </div>
  );
}
