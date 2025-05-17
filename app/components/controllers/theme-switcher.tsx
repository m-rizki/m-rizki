import { useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { themeAtom } from "~/store/atoms";
import { getSystemThemePreference } from "~/utils/style-utils";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      const systemTheme = getSystemThemePreference();
      localStorage.setItem("theme", systemTheme);
      setTheme(systemTheme);
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!hydrated) return null;

  return (
    <label className="swap swap-rotate btn btn-circle bg-base-300 border-base-content/10 font-bold shadow-sm">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <Sun className="swap-on" />
      <Moon className="swap-off" />
    </label>
  );
}
