// import { revalidatePath, revalidateTag } from "next/cache";

// //Server action
// const handleAddTodo = async (formData) => {
//   "use server";
//   const name = formData.get("name");
//   const response = await fetch(todoApi, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name }),
//   });
//   if (response.ok) {
//     // revalidatePath("/todos");
//     revalidateTag("todo_list");
//   }
// };

"use client";

import { useRef } from "react";
import { handleAddTodo } from "./action";

const TodoAdd2 = () => {
  const formRef = useRef();
  return (
    <form
      action={async (formData) => {
        await handleAddTodo(formData);
        formRef.current.reset();
      }}
    >
      <input type="text" name="name" placeholder="Ten cong viec..." />
      <button>Them</button>
    </form>
  );
};
export default TodoAdd2;
