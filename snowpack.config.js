module.exports = {
  mount: {
    root: "/",
    src: {
      url: "/",
      resolve: true,
    },
  },
  plugins: ["@snowpack/plugin-sass", "@snowpack/plugin-babel"],
};
