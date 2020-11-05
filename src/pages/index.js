import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo/seo"
import StructuredData from "../components/structured-data/structured-data"
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import MainContent from "../components/body/body"
import Footer from "../components/footer/footer"
import "../styles/style.css"

export default function Home({ data }) {

  const { history, profile, projects, blogs, devtool, social } = data;

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
          blogs={blogs}
        />
      </div>

      <Footer name={profile.name} devtool={devtool.nodes}/>
    </div>
  )
}

export const query = graphql`
  query {
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    devtool: allDevtoolYaml(filter: { url: { ne: null } }) {
      nodes {
        ...DevtoolFragment
      }
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
    blogs: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`