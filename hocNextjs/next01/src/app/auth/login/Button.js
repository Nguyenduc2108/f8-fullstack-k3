"use client";

import { useRouter } from "next/navigation";

function Button() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/auth/register");
      }}
    >
      Đăng ký tài khoản
    </button>
  );
}

export default Button;
