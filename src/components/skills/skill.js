import React from "react"
import { number, string } from "prop-types"
import SkillSvg from "./skill.svg"
import {SiJavascript, SiTypescript, SiPostgresql} from "react-icons/si"
import {FaPython} from "react-icons/fa"

const Skill = ({ skill, i }) => {
  const skillIcons = {
    python: [FaPython, "https://www.python.org/", "Python"],
    javascript: [SiJavascript, "https://www.javascript.com/", "JavaScript"],
    typescript: [SiTypescript, "https://www.typescriptlang.org/", "TypeScript"],
    postgresql: [SiPostgresql, "https://www.postgresql.org/", "PostgreSQL"]
  }
  const SkillIcon = skillIcons[skill][0];
  
  if (SkillIcon) {
    return (
      <div className="text-center text-back hover:text-front">
        <SkillIcon className="m-2 w-16 h-16 md:w-24 md:h-24 text-front"/>
        <p className="m-1 text-sm text-center w-20 md:text-base md:w-24">{skillIcons[skill][2]}</p>
      </div>
    )
  } else {
    return (
      <li
        className={`relative flex justify-center items-center rounded-full border-2 border-front`}
      >
        <span className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center">
          {skill}
        </span>
        <SkillSvg className={`w-full text-front opacity-75 m-2`} />
      </li>
    )
  }
}

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
