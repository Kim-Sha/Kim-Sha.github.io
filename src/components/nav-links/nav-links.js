import React from "react"
import { Link } from "gatsby"
import { FaPenNib, FaHome } from "react-icons/fa"

const NavLinks = () => {
    return (
        <div className="flex lg:flex-col">
            <div className="lg:mb-3 ml-2">
                <Link to="/">
                    <FaHome className="inline-block h-8 w-8" />
                    <span className="hidden lg:inline-block pl-2">Home</span>
                </Link>
            </div> 
            <div className="lg:mb-3 ml-2">
                <Link to="/writing">
                    <FaPenNib className="inline-block h-8 w-8" />
                    <span className="hidden lg:inline-block pl-3">Writing</span>
                </Link>
            </div>
        </div>    
    )
}

export default NavLinks