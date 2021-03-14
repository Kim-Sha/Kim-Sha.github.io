import React, { useContext } from "react"
import { ThemeContext } from "../../templates/theme-context"
import Loadable from "react-loadable"
import "../../styles/loading-cube.css"

const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    ),
  timeout: 10000,
})

export const LazyPlot = ({ layout, style, config, ...rest }) => {
  // Reference hook for 'dark' or 'light' theme
  const { theme } = useContext(ThemeContext)

  return (
    <Plotly
      layout={{
        margin: { t: 25, r: 25, b: 0, l: 0 },
        // Transparent background
        paper_bgcolor: `rgba(0, 0, 0, 0)`,
        plot_bgcolor: `rgba(0, 0, 0, 0)`,
        font: {
          color: theme === `light` ? "#343d52" : "#edf2f7",
          family: "Roboto, sans-serif",
        },
        // The next 3 options make the plot responsive.
        autosize: true,
        ...layout,
      }}
      style={{ width: `100%`, ...style }}
      useResizeHandler
      config={{
        displayModeBar: false,
        showTips: false,
        ...config,
      }}
      {...rest}
    />
  )
}
