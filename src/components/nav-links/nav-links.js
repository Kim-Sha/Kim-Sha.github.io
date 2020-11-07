import React from "react"
import { Link } from "gatsby"
import { FaPenNib, FaHome, FaEnvelope} from "react-icons/fa"

const NavLinks = () => {
    return (
        <div className="flex lg:flex-col">
            <div className="lg:mb-3 ml-2">
                <Link to="/" className="hover:opacity-75">
                    <FaHome className="inline-block h-8 w-8" />
                    <span className="hidden lg:inline-block pl-2">Home</span>
                </Link>
            </div> 
            <div className="lg:mb-3 ml-2">
                <Link to="/writing" className="hover:opacity-75">
                    <FaPenNib className="inline-block h-8 w-8" />
                    <span className="hidden lg:inline-block pl-3">Writing</span>
                </Link>
            </div>
            <div className="lg:mb-3 ml-2">
                <Link to="/contact-form" className="hover:opacity-75">
                    <FaEnvelope className="inline-block h-8 w-8" />
                    <span className="hidden lg:inline-block pl-3">Contact</span>
                </Link>
            </div>
        </div>    
    )
}

export default NavLinks