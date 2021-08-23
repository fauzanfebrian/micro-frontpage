const withCss = require("@zeit/next-css");
const withCompose = require("next-compose-plugins");
const withSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");

module.exports = withCompose([
  withCss({}),
  withImages({}),
  withSvg({
    include: path.resolve(__dirname, "./src/assets"),
    webpack(config, options) {
      return config;
    },
  }),
]);
