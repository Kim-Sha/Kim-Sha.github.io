import React, { useState } from "react"
import { ThemeToggle } from "../toggle/toggle"
import { HiMenuAlt2 } from "react-icons/hi"
import { ProfileType } from "../../types"
import { Link } from "gatsby"

const Header = ({ initials }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="p-4 bg-none sticky lg:static top-0 z-40 space-y-0">
      <div
        className={`${
          toggle ? "rounded-b-none" : null
        } rounded-lg bg-back-3 lg:bg-back flex justify-between p-4 lg:px-8`}
      >
        <button
          onClick={() => setToggle(!toggle)}
          onKeyDown={() => setToggle(!toggle)}
          className="lg:hidden focus:outline-none"
        >
          <HiMenuAlt2
            className={`${toggle ? "text-front-2" : "text-front-3"} w-8 h-8`}
          />
        </button>
        <div>
          <Link to="/">
            <span className="inline-flex w-8 h-8 lg:w-14 lg:h-14 lg:mt-4 font-header font-bold text-xs lg:text-xl justify-center items-center text-center text-front-3 lg:text-front border-2 border-solid border-front-3 lg:border-front rounded-full">
              {initials}
            </span>
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } rounded-t-none px-2 pb-4 lg:hidden bg-back-3 rounded-lg`}
      >
        <Link
          to="/"
          className="block px-2 py-1 text-front-text-3 text-xs font-semibold rounded hover:bg-gray-900"
        >
          Home
        </Link>
        <Link
          to="/writing"
          className="mt-1 block px-2 py-1 text-front-text-3 text-xs font-semibold rounded hover:bg-gray-900"
        >
          Writing
        </Link>
        <Link
          to="/contact-form"
          className="mt-1 block px-2 py-1 text-front-text-3 text-xs font-semibold rounded hover:bg-gray-900"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  initials: ProfileType.initials,
}

export default Header
