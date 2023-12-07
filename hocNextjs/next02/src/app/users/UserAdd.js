"use client";
import { userApi } from "./Users";
import { mutate } from "swr";

export default function UserAdd() {
  const postUser = async (data) => {
    const response = await fetch(userApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate({ url: userApi });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = Object.fromEntries([...new FormData(e.target)]);
    postUser({ name });
    e.target.reset();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ten..." />
        <button>Them</button>
      </form>
    </div>
  );
}
