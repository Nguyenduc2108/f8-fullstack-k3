"use client";
import { usePathname, useRouter } from "next/navigation";

export default function ChangeBtn({ lang }) {
  const router = useRouter();
  const pathName = usePathname();

  const toggleLanguage = () => {
    if (pathName === "/vi") {
      router.push("/en");
    } else {
      router.push("/vi");
    }
  };

  return (
    <button
      style={{
        padding: "10px",
        minWidth: "40px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={toggleLanguage}
    ></button>
  );
}
