import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const StructuredData = () => {
  const { profile, social } = useStaticQuery(graphql`
    query {
      profile: profileYaml {
        name
        profession
        company
        image {
          publicURL
        }
      }
      social: allSocialYaml(filter: { url: { ne: null } }) {
        nodes {
          url
        }
      }
    }
  `)

  const schema = {
    "@context": "http://schema.org/",
    "@type": "Person",
    name: profile.name,
    image: profile.image?.publicURL,
    jobTitle: profile.profession,
    sameAs: social.nodes.map(item => item.url),
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
  }

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  )
}

export default StructuredData
