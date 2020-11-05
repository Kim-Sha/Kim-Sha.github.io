import React from "react"
import { Link } from "gatsby"
import { FaPenNib, FaHome } from "react-icons/fa"

const NavLinks = () => {
    return (
        <div>
            <div className="mb-3">
                <Link to="/">
                    <FaHome className="inline-block h-8 w-8" />
                    <span className="hidden lg:inline-block pl-3">Home</span>
                </Link>
            </div> 
        <div className="mb-3">
            <Link to="/writing">
                <FaPenNib className="inline-block h-8 w-8" />
                <span className="hidden lg:inline-block pl-3">Writing</span>
            </Link>
        </div>
    </div>    
    )
}

export default NavLinks