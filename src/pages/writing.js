import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../templates/layout"
import ProjectTags from "../components/projects/project-tags"

export default function Writing({ data }) {

  const { blogs } = data;

  return (
    <Layout>
      <div className="lg:w-2/3 lg:pl-8 xl:pl-12">
        
        <header className="prose mb-6">
          <h1 className="prose">Writing</h1>
        </header>
        
        {blogs.edges.map(({ node }) => (
          <div>
            <Link to={node.fields.slug}>
              <div className="prose" key={node.id}>
                <h4>
                  {node.frontmatter.title}{" "}
                  <span className="italic text-sm text-front">
                    — {node.frontmatter.date}
                  </span>
                </h4>
                <p className="text-sm">{node.frontmatter.description ? node.frontmatter.description : node.excerpt}</p>
              </div>
            </Link>
            <ul className="pr-2 mb-6 italic">
              {node.frontmatter.tags && <ProjectTags tags={node.frontmatter.tags} />}
            </ul>
          </div>
          ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogs: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            tags
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