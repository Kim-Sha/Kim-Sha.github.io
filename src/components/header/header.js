import React, { useState } from "react"
import { FaEnvelope } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"
import { ProfileType } from "../../types"
import { Link } from "gatsby"

const Header = ({ initials }) => {

  const [toggle, setToggle] = useState(false)

  return (
    <header className="bg-front lg:bg-back sticky lg:static top-0 z-40">
      <div className="flex justify-between p-4 lg:px-8">
        <div className="hover:text-primary">
          <Link to='/'>
            <span className="fill-current inline-flex w-8 h-8 lg:w-14 lg:h-14 lg:mt-4 font-header font-bold text-xs lg:text-xl justify-center items-center text-center text-back lg:text-front border-2 border-solid border-back lg:border-front rounded-full">
              {initials}
            </span>
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link
            className="flex w-14 h-14 font-header font-semibold px-2 bg-primary rounded-full text-primary-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
            to='/contact-form'
          >
            <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
            <span className="hidden lg:block">Contact me</span>
          </Link>
        </div>
        <button onClick={() => setToggle(!toggle)} onKeyDown={() => setToggle(!toggle)} className="lg:hidden focus:outline-none">
          <HiMenuAlt3 className={`${toggle ? 'text-primary' : 'text-back'} w-8 h-8`}/>
        </button>
      </div>
      <div className={`${toggle ? 'block' : 'hidden'} px-2 pt-2 pb-4 lg:hidden`}>
        <Link to='/' className="block px-2 py-1 text-back text-xs font-semibold rounded hover:bg-gray-900">Home</Link>
        <Link to='/writing' className="mt-1 block px-2 py-1 text-back text-xs font-semibold rounded hover:bg-gray-900">Writing</Link>
        <Link to= '/contact-form' className="mt-1 block px-2 py-1 text-back text-xs font-semibold rounded hover:bg-gray-900">Contact</Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  initials: ProfileType.initials,
}

export default Header
