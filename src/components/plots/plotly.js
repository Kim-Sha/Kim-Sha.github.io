import React, { useContext, Suspense } from "react"
import { ThemeContext } from "../../templates/theme-context"
import "../../styles/loading-cube.css"

const Plot = React.lazy(() => import(`react-plotly.js`))

const LoadingCube = () => (
  <div className="sk-cube-grid">
    <div className="sk-cube sk-cube1"></div>
    <div className="sk-cube sk-cube2"></div>
    <div className="sk-cube sk-cube3"></div>
    <div className="sk-cube sk-cube4"></div>
    <div className="sk-cube sk-cube5"></div>
    <div className="sk-cube sk-cube6"></div>
    <div className="sk-cube sk-cube7"></div>
    <div className="sk-cube sk-cube8"></div>
    <div className="sk-cube sk-cube9"></div>
  </div>
)

export const LazyPlot = ({ layout, style, config, ...rest }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Suspense fallback={<LoadingCube />}>
      <Plot
        layout={{
          margin: { t: 25, r: 25, b: 0, l: 0 },
          paper_bgcolor: `rgba(0, 0, 0, 0)`,
          plot_bgcolor: `rgba(0, 0, 0, 0)`,
          font: {
            color: theme === `light` ? "#343d52" : "#edf2f7",
            family: "Roboto, sans-serif",
          },
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
    </Suspense>
  )
}
