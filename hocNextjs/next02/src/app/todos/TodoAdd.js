"use client";
import { useState } from "react";
import { todoApi } from "./page";
import { useRouter } from "next/navigation";
export default function TodoAdd() {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      console.log(`Them thanh cong`);
      router.refresh();
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ten cong viec..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Them</button>
    </form>
  );
}
