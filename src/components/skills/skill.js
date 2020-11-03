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
        <SkillIcon className="m-2 w-24 h-24 text-front"/>
        <h5 className="m-1">{skillIcons[skill][2]}</h5>
      </div>
    )
  } else {
    return (
      <li
        className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i}`}
      >
        <span className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center">
          {skill}
        </span>
        <SkillSvg className={`w-full text-skill-${i} opacity-75 m-2`} />
      </li>
    )
  }
}

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
