import React from "react"
import { FaReact, FaGithubAlt, FaCss3, FaPython } from "react-icons/fa"
import {
  SiGatsby,
  SiTailwindcss,
  SiGraphql,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si"
import { DevtoolType } from "../../types"

const DevtoolIcon = ({ name, ...params }) => {
  const icons = {
    react: FaReact,
    gatsby: SiGatsby,
    tailwind: SiTailwindcss,
    github: FaGithubAlt,
    graphql: SiGraphql,
    javascript: SiJavascript,
    typescript: SiTypescript,
    css: FaCss3,
    python: FaPython,
    postgresql: SiPostgresql,
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

DevtoolIcon.propTypes = {
  name: DevtoolType.name,
}

export default DevtoolIcon
