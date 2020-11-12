import Img from "gatsby-image"
import React from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"

const Project = props => {
  const { name, image, url, description, status, tags, icon } = props
  return (
    <a href={url} rel="noreferrer noopener" target="_blank">
      <div className="rounded-lg shadow hover:shadow-xl border-t-4 border-front-2 relative flex flex-wrap bg-back-2 p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {image && (
          <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
            <Img fluid={image.childImageSharp.fluid} alt={name} />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold text-front-text">{name}</h4>
          <p className="w-full py-4 whitespace-pre-line text-front-text">{description}</p>
          <ul className="pr-2">
            {status && <ProjectStatus status={status} />}
            {tags && <ProjectTags tags={tags} />}
          </ul>

          {icon && <ProjectIcon icon={icon} />}
        </div>
      </div>
    </a>
  )
}

Project.propTypes = ProjectType

export default Project
