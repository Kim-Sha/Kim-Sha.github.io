import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import StructuredData from "../components/structured-data/structured-data"

export const Head = ({ data }) => {
  const image = data.profile.seo_image
    ? data.profile.seo_image.childImageSharp.resize
    : null
  return (
    <>
      <SEO image={image} />
      <StructuredData />
    </>
  )
}

export default function Home({ data }) {
  const { history, profile, projects, blogs } = data

  return (
    <Layout sidebarOnMobile={true}>
      <MainContent
        history={history.nodes}
        profile={profile}
        projects={projects.nodes}
        blogs={blogs}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    profile: profileYaml {
      ...ProfileFragment
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
    blogs: allMdx(sort: { frontmatter: { date: DESC } }) {
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
