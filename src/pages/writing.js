import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../templates/layout"

export default function Writing({ data }) {

  const { blogs } = data;

  return (
    <Layout>
      <div className="lg:w-2/3 lg:pl-8 xl:pl-12">
        
        <header className="prose mb-6">
          <h1 className="prose">Writing</h1>
        </header>
        
        {blogs.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <div className="prose mb-6" key={node.id}>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogs: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt(pruneLength: 90)
        }
      }
    }
  }
`