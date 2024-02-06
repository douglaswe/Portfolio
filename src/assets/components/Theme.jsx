import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const getThemeStorage = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  useEffect(() => {
    getThemeStorage();
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark", true);
    } else {
      document.documentElement.classList.toggle("dark", false);
    }
  }, [theme]);

  return (
    <div>
      <button
        aria-label="switcher"
        onClick={toggleTheme}
        className="text-cdark dark:text-cwhite hover:rotate-20 hover:bg-ccyan p-2 rounded-full"
      >
        {theme === "light" ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </div>
  );
};
export default Theme;
