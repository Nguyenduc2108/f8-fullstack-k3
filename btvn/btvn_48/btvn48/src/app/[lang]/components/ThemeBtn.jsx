"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeBtn = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      style={{ border: "none", backgroundColor: "inherit", cursor: "pointer" }}
      className="btn-icon"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon
          height={20.25}
          width={20.25}
          style={{ color: "rgb(253 186 116)" }}
        />
      ) : (
        <MoonIcon
          height={20.25}
          width={20.25}
          style={{ color: "rgb(30 41 59)" }}
        />
      )}
    </button>
  );
};

export default ThemeBtn;
