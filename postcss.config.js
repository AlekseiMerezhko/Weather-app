//postcss.config.js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    require("@tailwindcss/custom-forms"),
    tailwindcss("./tailwind.js"),
    require("autoprefixer")
  ]
};
