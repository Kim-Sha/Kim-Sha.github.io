import React from "react"
import { graphql } from "gatsby"
import {PandaLayout} from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <PandaLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </PandaLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`