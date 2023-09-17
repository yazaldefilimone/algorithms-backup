import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    exclude: ['./2023_09_algorithms']
  },

  resolve: {
    alias: {
      "~/": "./",
    },
  },
});
