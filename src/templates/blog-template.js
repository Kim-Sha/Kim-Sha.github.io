import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { previous, next } = data
  debugger;

  return (
    <Layout>
      <article className="prose lg:w-2/3 lg:pl-8 xl:pl-12">
          <header>
            <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`