"use client";
import React, { useState } from "react";

export default function Post({ post }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <>
        {show && <p>{post.body}</p>}
        <button onClick={() => setShow(!show)}>
          {show ? "Thu gon" : "Them"}
        </button>
      </>
    </div>
  );
}
