import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front-text text-sm uppercase mb-3">
      About Me
    </h5>
    <div className="text-front-text font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
