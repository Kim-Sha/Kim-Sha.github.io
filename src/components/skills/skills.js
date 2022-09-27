import React from "react"
import Skill from "./skill"
import { ProfileType } from "../../types"

const Skills = ({ skills }) => (
  <>
    <h5 className="font-header font-semibold text-front-text text-sm uppercase mb-3">
      Top languages
    </h5>
    <ul className="flex-wrap grid grid-cols-4 gap-2 md:gap-4">
      {skills.map((skill, i) => (
        <Skill skill={skill} i={i + 1} />
      ))}
    </ul>
  </>
)

Skills.propTypes = {
  skills: ProfileType.skills,
}

export default Skills
