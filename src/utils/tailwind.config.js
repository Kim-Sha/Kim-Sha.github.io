module.exports = () => {
  return {
    purge: {
      content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
      options: {
        whitelistPatterns: [/^text-skill/, /^border-skill/],
      },
    },
    theme: {
      fontFamily: {
        header: ["Source Sans Pro", "sans-serif"],
        text: ["Roboto", "sans-serif"],
      },
      extend: {
        colors: {
          back: "var(--back)",
          "back-2": "var(--back-2)",
          "back-3": "var(--back-3)",

          front: "var(--front)",
          "front-2": "var(--front-2)",
          "front-3": "var(--front-3)",
          "front-4": "var(--front-4)",

          "front-text": "var(--front-text)",
          "front-text-2": "var(--front-text-2)",
          "front-text-3": "var(--front-text-3)",

          prose: "var(--prose)",
          "prose-bold": "var(--prose-bold)",
          "prose-head": "var(--prose-head)",
          "prose-link": "var(--prose-link)",
          "prose-blockquote": "var(--prose-blockquote)",
          "prose-code": "var(--prose-code)",
          "prose-lead": "var(--prose-lead)",

          line: "var(--line)",
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          14: "3.5rem",
        },
      },
      typography: theme => ({
        default: {
          css: {
            color: theme("colors.prose"),
            strong: {
              color: theme("colors.prose-bold"),
            },
            h1: {
              color: theme("colors.prose-head"),
            },
            h2: {
              color: theme("colors.prose-head"),
            },
            h3: {
              color: theme("colors.prose-head"),
            },
            h4: {
              color: theme("colors.prose-head"),
            },
            h5: {
              color: theme("colors.prose-head"),
            },
            h6: {
              color: theme("colors.prose-head"),
            },
            a: {
              color: theme("colors.prose-link"),
            },
            blockquote: {
              color: theme("colors.prose-blockquote"),
            },
            code: {
              color: theme("colors.prose-code"),
            },
            thead: {
              color: theme("colors.prose"),
            },
            hr: {
              color: theme("colors.prose"),
            },
            '[class~="lead"]': {
              color: theme("colors.prose-lead"),
            },
          },
        },
      }),
    },
    plugins: [require("@tailwindcss/typography")],
  }
}
