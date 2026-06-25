/**
 * ThemeToggle.tsx
 * Global dark/light mode toggle. Theme is stored in localStorage
 * and applied by adding/removing the "dark" class on the html tag.
 */

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark and light theme"
      onClick={handleToggleTheme}
      className="fixed right-4 top-4 z-[60] inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-text)] shadow-lg backdrop-blur transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

export default ThemeToggle;