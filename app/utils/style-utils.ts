// Theme utils

export const getSystemThemePreference = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "light";
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme
    ? JSON.parse(savedTheme)
    : getSystemThemePreference();

  document.documentElement.setAttribute("data-theme", theme);
};

// ! Theme utils
