import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Square } from "./svgs/Square";
const theme = signal("light");

export default function ThemeToggle() {
    const themes = ["light", "dark", "mint-choc"];

    const toggleTheme = () => {
        const currentIndex = themes.indexOf(theme.value);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        // Update the theme in the component state
        theme.value = nextTheme;
    };

    // Add/remove theme class to the body element when the theme changes
    useEffect(() => {
        document.documentElement.classList.remove(...themes);
        document.documentElement.classList.add(theme.value);
        document.documentElement.setAttribute("data-theme", theme.value);
    }, [theme.value]);

    return (
        <button
            onClick={toggleTheme}
            id="themeToggleBtn"
            data-theme-toggle
            class="w-10 h-10"
        >
            <Square />
        </button>
    );
}
