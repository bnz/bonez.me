/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: '376px',
            },
        },
    },
    safelist: [
        "footer-separator",
        "text-right",
        "w-2/3",
        "ml-auto",
        "text-sm",
        "italic",
        "mb-10",
    ],
    plugins: [],
}

