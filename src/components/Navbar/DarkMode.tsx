import { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const themeStorage = localStorage.getItem("theme");
  const element = document.documentElement;
  const [theme, setTheme] = useState(themeStorage ? themeStorage : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  }, [theme, element]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};

export default DarkMode;
