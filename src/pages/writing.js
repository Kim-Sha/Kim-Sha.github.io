import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../templates/layout"
import ProjectTags from "../components/projects/project-tags"
import { FaSearch } from "react-icons/fa"

export default function Writing({ data }) {

  const { profile, blogs } = data;
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleSearchInput = event => {
    const query = event.target.value
    const posts = blogs.edges || []
     // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.node.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags
          .join("") // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase()))
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && (query !== emptyQuery)
  const posts = hasSearchResults ? filteredData : blogs.edges
  const image = profile.seo_image ? profile.seo_image.childImageSharp.resize : null

  return (
    <Layout sidebarOnMobile={false} title="Writing" image={image} pathname="/writing">
      <div className="lg:w-2/3 lg:pl-8 xl:pl-12">
        
        <header className="prose mb-6">
          <h1 className="prose">Writing</h1>
        </header>

        <div className="mb-6">
          <div class="bg-back-secondary flex items-center rounded-md shadow w-full lg:w-3/5 h-10">
            <input class="bg-back-secondary rounded-l-full w-full h-full py-4 px-6 leading-tight focus:outline-none"
                   id="search" type="text" placeholder="Search" onChange={handleSearchInput}/>

            <div class="p-4">
              <button class="bg-primary text-back-secondary rounded-full p-2 hover:bg-opacity-75 focus:outline-none w-full h-full flex items-center justify-center">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
        
        {posts.map(({ node }) => (
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
    profile: profileYaml {
      ...ProfileFragment
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