import React from "react"
import { Link } from "gatsby"
import TextLoop from "react-text-loop";

const Blogs = ({ blogs }) => (
  <div className="mb-6">
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">Writing</h5>
    <TextLoop interval={5000}>
      {blogs.edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <div className="prose lg:pl-2" key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span className="italic text-base text-front">
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.frontmatter.description ? node.frontmatter.description : node.excerpt}</p>
          </div>
        </Link>
      ))}
    </TextLoop>
  </div>
)

export default Blogs
