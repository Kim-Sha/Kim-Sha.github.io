import React from "react"
import { Link } from "gatsby"
import Location from "./location"
import ProfileImage from "./profile-image"
import { FaPenNib, FaHome } from "react-icons/fa"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"
import SocialLinks from "../social-links/social-links"

const Sidebar = ({ profile, social }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
          {profile.profession}
        </h2>
        <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6">
          {profile.name}
        </h1>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        {profile.location && (
          <Location
            location={profile.location}
            relocation={profile.relocation}
          />
        )}
        <br />

        <div className="mb-3">
          <Link to="/">
            <FaHome className="inline-block h-8 w-8" />
            <span className="hidden lg:inline-block pl-3">Home</span>
          </Link>
        </div>
        
        <div className="mb-3 content-center">
          <Link to="/writing">
            <FaPenNib className="inline-block h-8 w-8" />
            <span className="hidden lg:inline-block pl-3">Writing</span>
          </Link>
        </div>

      </div>

      <div className="pt-8 pb-12 lg:py-0">
        <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
          Connect
        </h5>
        <SocialLinks social={social} />
      </div>
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default Sidebar
