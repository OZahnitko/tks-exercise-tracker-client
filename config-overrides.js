const path = require("path");

const PATH_ALIASES = require("./config/PATH_ALIASES.json");

const config = {
  PATH_ALIASES,
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: PATH_ALIASES.reduce(
        (acc, pathAlias) => ({
          ...acc,
          [pathAlias.name]: path.resolve(__dirname, `src/${pathAlias.path}`),
        }),
        {}
      ),
    },
  }),
};

module.exports = config;
