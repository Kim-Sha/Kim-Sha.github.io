import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./layout"
import SEO from "../components/seo/seo"
import StructuredData from "../components/structured-data/structured-data"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaAngleUp } from "react-icons/fa"

export default function BlogPost({ data, children }) {
  const post = data.mdx
  const { previous, next } = data

  return (
    <Layout>
      <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-12">
        <article className="prose mb-6">
          <button
            className="fixed invisible lg:visible bottom-0 right-0 p-6 focus:outline-none text-front opacity-25 hover:opacity-100"
            onClick={() => scrollTo("#blog-header")}
          >
            <FaAngleUp className="w-10 h-10" />
          </button>
          <header id="blog-header">
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          {children}
        </article>
        <nav>
          <ul className="flex justify-between">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const post = data.mdx
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={post.fields.slug}
      />
      <StructuredData />
    </>
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
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
