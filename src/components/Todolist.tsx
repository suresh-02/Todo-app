interface Todo {
  id: number;
  todo: string;
}

interface props {
  todo: Todo[];
  onDelete: (id: number) => void;
}
const Todolist = ({ todo, onDelete }: props) => {
  if (todo.length === 0)
    return (
      <p className="text-red-600 ml-[95px] mt-[20px] text-2xl font-bold">
        No Task Remaining, You Nailed it..!
      </p>
    );

  return (
    <div className="flex flex-col ml-[92px]">
      <table className=" mt-[50px]  border-2 border-black text-center w-[400px] text-sm font-light ">
        <thead className="border-b  font-medium dark:border-neutral-500">
          <tr>
            <th>task</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="text-center ">
          {todo.map((todo) => (
            <tr className="border-b  font-medium " key={todo.id}>
              <td className="px-[12px]    py-[15px]">{todo.todo}</td>
              <td className="flex gap-4 px-[12px] justify-end mr-[18px] py-[12px]">
                <button className="p-2 bg-red-600 rounded-md w-[70px] text-white">
                  Edit
                </button>
                <button
                  className="p-2 bg-red-600 rounded-md w-[70px] text-white"
                  onClick={() => onDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
