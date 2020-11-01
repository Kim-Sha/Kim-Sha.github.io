import React from "react"
import Header from "../components/header/header"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import StructuredData from "../components/structured-data"
import Sidebar from "../components/sidebar/sidebar"


export default function Home({ data }) {
  const { history, profile, projects, site, social } = data;
  debugger;
  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <StructuredData profile={profile} social={social.nodes} />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />
      </div>
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
  }
`