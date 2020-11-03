import { graphql } from "gatsby"
import { string, oneOf } from "prop-types"

export const DevtoolType = {
  name: oneOf([
    "react",
    "gatsby",
    "tailwind",
    "github",
    "graphql",
    "javascript",
    "typescript",
    "css",
    "python",
    "postgresql"
  ]),
  url: string,
}

export const query = graphql`
  fragment DevtoolFragment on DevtoolYaml {
    name
    url
  }
`
