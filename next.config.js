const path = require("path");
require("dotenv").config();

module.exports = {
  env: {
    SITE_URL: process.env.SITE_URL,
  },
  webpack: (config) => {
    config.resolve.alias["atoms"] = path.join(__dirname, "src/atoms");
    config.resolve.alias["molecules"] = path.join(__dirname, "src/molecules");
    config.resolve.alias["organisms"] = path.join(__dirname, "src/organisms");
    config.resolve.alias["templates"] = path.join(__dirname, "src/templates");
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");
    config.resolve.alias["utils"] = path.join(__dirname, "src/utils");
    config.resolve.alias["tests"] = path.join(__dirname, "src/__tests__");
    config.resolve.alias["api"] = path.join(__dirname, "src/api");
    config.resolve.alias["types"] = path.join(__dirname, "src/types");
    config.resolve.alias["~"] = path.join(__dirname, "src");

    return config;
  },
};
