import React, { useContext } from "react"
import { ThemeContext } from "../../templates/theme-context"
import Loadable from 'react-loadable'
// import { FoldingSpinner } from './Spinners'
import { SiGatsby } from "react-icons/si"

const Plotly = Loadable({
    loader: () => import(`react-plotly.js`),
    loading: ({ timedOut }) =>
    timedOut ? (
        <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
    //   <FoldingSpinner />
        <SiGatsby className="w-6 h-6" />
    ),
    timeout: 10000,
})

export const LazyPlot = ({ layout, style, config, ...rest }) => {
    
    // Reference hook for 'dark' or 'light' theme
    const { theme } = useContext(ThemeContext)

    return (
    <Plotly
        layout={{
        margin: { t: 0, r: 0, b: 0, l: 0 },
        paper_bgcolor: `rgba(0, 0, 0, 0)`,
        plot_bgcolor: `rgba(0, 0, 0, 0)`,
        font: {
            color: theme === `light` ? `black` : `white`,
            size: 16,
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