import React from "react"
import { Link } from "gatsby"
import TextLoop from "react-text-loop";

const Blogs = ({ blogs }) => (
  <div className="mb-6">
    <h5 className="font-header font-semibold text-front-text text-sm uppercase mb-3">Writing</h5>
    <p>
      <TextLoop interval={5000}>
        {blogs.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <div className="prose lg:pl-2 text-xs lg:text-base w-64 md:w-full" key={node.id}>
              <h3 className="truncate ...">
                {node.frontmatter.title}{" "}
                <span className="text-xs lg:text-base text-front-text">
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p className="truncate ...">
                {node.frontmatter.description ? node.frontmatter.description : node.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </TextLoop>
    </p>
    
  </div>
)

export default Blogs
