export default {
  entries: ["./index.js"],
  rollup: {
    esbuild: {
      target: "es2022",
    },
  },
};
