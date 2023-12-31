"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { headers, cookies } from "next/headers";
//Server action
const handleAddTodo = async (formData) => {
  const name = formData.get("name");
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (response.ok) {
    const path = headers().get("next-url");
    console.log(path);
    revalidatePath(path);
    // revalidateTag("todo_list");
    //Tạo cookie
    cookies.set({
      name: "todo",
      value: name,
      maxAge: 86400,
      path: "/",
      httpOnly: true,
    });
  }
};
