/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                text: "var(--text)",
                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
            },
            margin: {
                xs: "var(--space-xs)",
                sm: "var(--space-sm)",
                md: "var(--space-md)",
                lg: "var(--space-lg)",
            },
            space: {
                sm: "var(--space-sm)",
                md: "var(--space-md)",
                lg: "var(--space-lg)",
            },
            height: {
                small: "var(--small)",
            },
            fontSize: {
                title: "var(--text-title)",
                "sub-title": "var(--text-sub-title)",
                paragraph: "var(--text-paragraph)",
                small: "var(--text-small)",
            },
            fontFamily: {
                heading: ["var(--font-heading)"],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: "var(--text)",
                        "--tw-prose-headings": "var(--secondary)",
                    },
                },
                lg: {
                    css: {
                        "--tw-prose-headings": "var(--secondary)",
                        "--tw-prose-links": "var(--accent)",
                        color: "var(--text)",
                        p: {
                            fontSize: "var(--font-0)",
                        },
                        h4: {
                            fontSize: "var(--font-1)",
                        },
                        h3: {
                            fontSize: "var(--font-2)",
                        },
                        h2: {
                            fontSize: "var(--font-3)",
                        },
                        h1: {
                            fontSize: "var(--font-5)",
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/container-queries"),
    ],
};
