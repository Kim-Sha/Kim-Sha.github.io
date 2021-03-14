import React from "react"
import { Link } from "gatsby"
import { FaPenNib, FaHome, FaEnvelope } from "react-icons/fa"

const NavLinks = () => {
  return (
    <div className="text-front-text hidden lg:block mt-8 mb-8">
      <Link to="/" className="flex p-2 justify-start hover:opacity-75">
        <FaHome className="h-8 w-8" />
        <span className="pl-4">Home</span>
      </Link>
      <Link to="/writing" className="flex p-2 justify-start hover:opacity-75">
        <FaPenNib className="h-8 w-8" />
        <span className="pl-4">Writing</span>
      </Link>
      <Link
        to="/contact-form"
        className="flex p-2 justify-start hover:opacity-75"
      >
        <FaEnvelope className="h-8 w-8" />
        <span className="pl-4">Contact</span>
      </Link>
    </div>
  )
}

export default NavLinks
