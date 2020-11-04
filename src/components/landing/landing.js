import React from "react"
import { ProfileType } from "../../types"
import TextLoop from 'react-text-loop';

const Landing = ({ name }) => (
  <header className="p-4 lg:px-8 bg-back text-center w-screen h-screen">
    <h1 className="p-4 text-6xl">Hello, I'm {name}</h1>
    <h2 className="p-4 text-4xl">
      <TextLoop interval={750} children={['Running', 'through the', 'six', 'with my', 'woes']}/>
    </h2>
  </header>
)

Landing.propTypes = {
  name: ProfileType.name,
}

export default Landing
