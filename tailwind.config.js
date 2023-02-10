module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          button: "var(--color-button-base)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
