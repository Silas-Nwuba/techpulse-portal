module.exports = {
  plugins: [
    require("postcss-nested"), // Enable nested CSS
    require("tailwindcss"), // Then import Tailwind CSS
    require("autoprefixer"),
  ],
};
