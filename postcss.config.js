// postcss.config.js
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const prefixer = require("postcss-prefix-selector");

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    prefixer({
      prefix: ".visa-prefix", // Use a selector prefix
      exclude: [/Toastify__/i, /Toastify--/i, /^:root/i], // Exclude react-toastify classes with both `Toastify__` and `Toastify--`
      transform: (prefix, selector, prefixedSelector) => {
        return prefixedSelector.replace(/\.visa-prefix\s+/, `${prefix} `);
      },
    }),
  ],
};
