import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "./theme-context"
import { MDXProvider } from '@mdx-js/react' 
import { LazyPlot } from '../components/plots/plotly'
import SEO from "../components/seo/seo"
import StructuredData from "../components/structured-data/structured-data"
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import Footer from "../components/footer/footer"
import "../styles/style.css"

const globalComponents = {
  LazyPlot
}

export default function Layout({ children, sidebarOnMobile, description, meta, image, title, pathname }) {

  const { profile, devtool, social } = useStaticQuery(
    graphql`
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
    }`
  );

  return (
    <ThemeProvider>
      <div className="antialiased bg-back leading-normal font-text text-front">
        <SEO description={description} meta={meta} image={image} title={title} pathname={pathname}/>
        <StructuredData profile={profile} social={social.nodes} />

        <Header initials={profile.initials} />

        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap my-4">
          <Sidebar sidebarOnMobile={sidebarOnMobile} profile={profile} social={social.nodes} />
          <MDXProvider components={globalComponents}>
            {children}
          </MDXProvider>
        </div>

        <Footer name={profile.name} devtool={devtool.nodes}/>
      </div>
    </ThemeProvider>
  )
}