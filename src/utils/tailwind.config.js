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
        screens: {
          'dark-mode': { raw: '(prefers-color-scheme: dark)' }
        },
        colors: {
          ...colors,
          "back-light": color(colors.back)
            .lighten(0.18)
            .hex(),
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
