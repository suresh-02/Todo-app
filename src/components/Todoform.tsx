import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  todo: z.string().min(2, { message: "*Please enter your task" }),
});

type formData = z.infer<typeof schema>;

interface props {
  onSubmit: (data: formData) => void;
}

const Todoform = ({ onSubmit }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
        className="flex flex-col px-auto ml-[-125px] mt-[115px] w-[800px] gap-3 justify-center items-center "
      >
        <p className="text-2xl font-bold pb-[15px]">
          What are you upto today..!
        </p>

        <input
          {...register("todo")}
          type="text"
          id="todo"
          placeholder="Enter a Task"
          className="border-2  p-2 border-black rounded-md"
        />
        <div className=" flex items-center px-[20px] ">
          {errors.todo && (
            <p className="text-red-600 font-bold">{errors.todo.message}</p>
          )}
        </div>
        <button
          type="submit"
          className=" bg-blue-600 p-2 rounded-md w-min-content h-[40px] text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Todoform;
