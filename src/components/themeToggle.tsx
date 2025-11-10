import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Toggle
    pressed={darkMode}
    // onPressedChange={setDarkMode}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md border-gray-700 dark:bg-gray-900 dark:text-[#d1d9ce] dark:hover:bg-[#d1d9ce]/60 dark:hover:text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#d1d9ce] hover:border-0 text-[#1a1a1a] my-4 cursor-pointer"
    >
      {darkMode ? <Moon/> : <Sun/>}
    </Toggle>
  );
}
