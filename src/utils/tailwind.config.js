const color = require("color")

module.exports = theme => {
  const colors =
    typeof theme === "string" ? require(`../themes/${theme}`) : theme
  const darkMode = theme === "ksha-dark"

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
          'back': 'var(--back)',
          'back-2': 'var(--back-2)',
          'back-3': "var(--back-3)",

          'front': "var(--front)",
          'front-2': 'var(--front-2)',
          'front-3': 'var(--front-3)',
          'front-4': 'var(--front-4)',
          
          'front-text': "var(--front-text)",
          'front-text-2': "var(--front-text-2)",
          'front-text-3': 'var(--front-text-3)',

          'line': 'var(--line)',
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          "14": "3.5rem",
        },
      },
      typography: (theme) => {darkMode?({
          default: {
            css: {
              color: theme('colors.front-text'),
              strong: {
                color: theme('colors.front-text-3')
              },
              h1: {
                color: theme('colors.front-text-3')
              },
              h2: {
                color: theme('colors.front-text-3')
              },
              h3: {
                color: theme('colors.front-text-3')
              },
              h4: {
                color: theme('colors.front-text-3')
              },
              h5: {
                color: theme('colors.front-text-3')
              },
              h6: {
                color: theme('colors.front-text-3')
              },
              a: {
                color: theme('colors.front-text-3')
              },
              blockquote: {
                color: theme('colors.front-text-3')
              },
              code: {
                color: theme('colors.front-text-3')
              },
              thead: {
                color: theme('colors.front-text-3')
              },
              hr: {
                color: theme('colors.front-text-3')
              },
              '[class~="lead"]': {
                  color: theme('colors.front-text-3')
              },
            }
          }
        }):null}
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
  }
}
