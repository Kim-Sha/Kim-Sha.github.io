import React from "react"
import { graphql } from "gatsby"
import Layout from "../templates/layout"
import MainContent from "../components/main-content/main-content"

export default function Home({ data }) {
  const { history, profile, projects, blogs } = data
  const image = profile.seo_image
    ? profile.seo_image.childImageSharp.resize
    : null

  return (
    <Layout sidebarOnMobile={true} image={image}>
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
    blogs: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
