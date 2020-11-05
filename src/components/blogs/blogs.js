import React from "react"
import { Link } from "gatsby"

const Blogs = ({ blogs }) => (
  <div className="mb-6">
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Writing
    </h5>
    <h6>{blogs.totalCount} Posts</h6>
    {blogs.edges.map(({ node }) => (
      <div className="prose" key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </div>
)

export default Blogs
