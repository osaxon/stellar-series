import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import { Square } from "./svgs/Square";

const themeAtom = atomWithStorage("theme", "light");

export default function ThemeToggle() {
    const themes = ["light", "dark", "mint-choc"];
    const [theme, setTheme] = useAtom(themeAtom);

    const toggleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        // Update the theme in the component state
        setTheme(nextTheme);
    };

    useEffect(() => {
        document.documentElement.classList.remove(...themes);
        document.documentElement.classList.add(theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <button
            onClick={toggleTheme}
            id="themeToggleBtn"
            data-theme-toggle
            className="w-10 h-10"
        >
            <Square />
        </button>
    );
}
