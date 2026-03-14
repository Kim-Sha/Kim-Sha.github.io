import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Blogs = ({ blogs }) => {
  const [index, setIndex] = useState(0)
  const posts = blogs.edges

  useEffect(() => {
    if (posts.length <= 1) return
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % posts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [posts.length])

  if (!posts.length) return null

  const { node } = posts[index]

  return (
    <div className="mb-6">
      <h5 className="font-header font-semibold text-front-text text-sm uppercase mb-3">
        Writing
      </h5>
      <div>
        <Link to={node.fields.slug}>
          <div className="prose lg:pl-2 text-xs lg:text-base w-64 md:w-full">
            <h3 className="truncate ...">
              {node.frontmatter.title}{" "}
              <span className="text-xs lg:text-base text-front-text">
                — {node.frontmatter.date}
              </span>
            </h3>
            <p className="truncate ...">
              {node.frontmatter.description
                ? node.frontmatter.description
                : node.excerpt}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blogs
