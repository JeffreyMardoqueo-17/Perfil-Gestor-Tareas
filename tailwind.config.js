/** @type {import('tailwindcss').Configuration} */
module.exports = {
    darkMode: "class",
    content: ["./*.html"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
