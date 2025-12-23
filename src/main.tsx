import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize theme before React renders to prevent flickering
function initTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  
  if (stored === "light" || stored === "dark") {
    root.classList.remove("light", "dark");
    root.classList.add(stored);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.classList.remove("light", "dark");
    root.classList.add("dark");
  } else {
    root.classList.remove("light", "dark");
    root.classList.add("light");
  }
}

initTheme();

createRoot(document.getElementById("root")!).render(<App />);
