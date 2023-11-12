const themeToggleBtn = document.getElementById("themeToggleBtn");
const htmlElement = document.documentElement;

// Function to toggle between theme classes
export function toggleTheme() {
    const themes = ["light", "dark", "mint-choc"];
    const currentTheme = htmlElement.getAttribute("data-theme") || themes[0];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    // Remove the current theme class and add the next one
    htmlElement.classList.remove(currentTheme);
    htmlElement.classList.add(nextTheme);

    // Update the data-theme attribute
    htmlElement.setAttribute("data-theme", nextTheme);
}

// Attach the toggleTheme function to the button click event
themeToggleBtn.addEventListener("click", toggleTheme);
