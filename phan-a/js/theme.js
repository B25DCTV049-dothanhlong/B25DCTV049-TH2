const KEY = "theme";

export function initTheme() {
  const saved = localStorage.getItem(KEY) || "light";
  document.documentElement.dataset.theme = saved;

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(KEY, next);
  });
}