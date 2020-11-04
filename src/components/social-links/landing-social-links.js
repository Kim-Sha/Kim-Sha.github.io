import React from "react"
import SocialIcon from "./social-icon"
import { SocialType, arrayOf, shape } from "../../types"

const LandingSocialLinks = ({ social }) => {
  return (
    <div className="pl-3" id='contact'>
      {social.map(({ name, url }, i) => {
        return (
          <a
            aria-label={name}
            className={`inline-flex w-20 h-20 justify-center items-center rounded-full -ml-3 hover:shadow-lg transition-shadow duration-150`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={name} className="w-12 h-12" />
          </a>
        )
      })}
    </div>
  )
}

LandingSocialLinks.propTypes = {
  social: arrayOf(shape(SocialType)),
}

export default LandingSocialLinks
