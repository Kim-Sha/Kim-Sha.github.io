import Img from "gatsby-image"
import React from "react"
import { ProfileType } from "../../types"

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <Img
      fixed={image.childImageSharp.fixed}
      alt={name}
      className="shadow rounded-full relative z-10"
    />
    <div className="shadow-xl absolute inset-0 rounded-full bg-primary z-0 transform translate-x-12"></div>
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}

export default ProfileImage
