import { useSyncExternalStore, useCallback } from "react";

type Theme = "theme-light" | "dark" | "system";

// Theme store implementation
class ThemeStore {
  private listeners = new Set<() => void>();
  private theme: Theme = "theme-light";

  constructor() {
    if (typeof window !== "undefined") {
      // Initialize from DOM
      const isDarkMode = document.documentElement.classList.contains("dark");
      this.theme = isDarkMode ? "dark" : "theme-light";
      this.applyTheme();
    }
  }

  subscribe = (callback: () => void) => {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  };

  getSnapshot = (): Theme => {
    return this.theme;
  };

  getServerSnapshot = (): Theme => {
    return "theme-light"; // Default for SSR
  };

  setTheme = (newTheme: Theme) => {
    this.theme = newTheme;
    if (typeof window !== "undefined") {
      this.applyTheme();
      localStorage.setItem("theme", newTheme);
    }
    this.emit();
  };

  private applyTheme() {
    const isDark =
      this.theme === "dark" ||
      (this.theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }

  private emit() {
    this.listeners.forEach((callback) => callback());
  }
}

// Create a singleton instance
const themeStore = new ThemeStore();

export const useThemeMode = () => {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  const setTheme = useCallback((newTheme: Theme) => {
    themeStore.setTheme(newTheme);
  }, []);

  return [theme, setTheme] as const;
};
