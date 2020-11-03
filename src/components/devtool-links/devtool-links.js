import React from "react"
import DevtoolIcon from "./devtool-icon"
import { DevtoolType, arrayOf, shape } from "../../types"

const DevtoolLinks = ({ devtool }) => {
  return (
    <div className="pl-3" id='contact'>
      {devtool.map(({ name, url }, i) => {
        return (
          <a
            aria-label={name}
            className={`inline-flex w-10 h-10 md:w-12 md:h-12 justify-center items-center rounded-full -ml-3 bg-front text-back hover:bg-back hover:text-front`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <DevtoolIcon name={name} className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}

DevtoolLinks.propTypes = {
  devtool: arrayOf(shape(DevtoolType)),
}

export default DevtoolLinks
