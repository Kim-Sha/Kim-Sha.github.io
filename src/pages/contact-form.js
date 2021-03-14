import React from "react"
import Layout from "../templates/layout"
import { ProfileType } from "../types"
import { graphql } from "gatsby"

const Contact = data => {
  const profile = data.data.profile
  const image = profile.seo_image
    ? profile.seo_image.childImageSharp.resize
    : null

  return (
    <Layout
      sidebarOnMobile={false}
      title="Contact"
      image={image}
      pathname="/contact-form"
    >
      <div className="lg:w-2/3 lg:pl-8 xl:pl-12">
        <header className="prose mb-6">
          <h1 className="prose">Get in touch</h1>
        </header>

        <form
          className="w-full max-w-lg"
          method="post"
          action={`https://formspree.io/f/${process.env.FORM_ENDPOINT}`}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label for="grid-first-name">
                <p className="block uppercase tracking-wide text-front-text text-xs font-bold mb-2">
                  First Name*
                </p>
                <input
                  required
                  className="appearance-none block w-full bg-back-2 text-front-text border border-back-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="first-name"
                />
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label for="grid-last-name">
                <p className="block uppercase tracking-wide text-front-text text-xs font-bold mb-2">
                  Last Name
                </p>
                <input
                  className="appearance-none block w-full bg-back-2 text-front-text border border-back-2 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  name="last-name"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label for="email">
                <p className="block uppercase tracking-wide text-front-text text-xs font-bold mb-2">
                  E-mail
                </p>
                <input
                  className="appearance-none block w-full bg-back-2 text-front-text border border-back-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  id="email"
                  type="email"
                  name="_replyto"
                />
              </label>
              <p className="text-gray-600 text-xs italic">
                If necessary, please provide contact information so that I may
                get back to you.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label for="message">
                <p className="block uppercase tracking-wide text-front-text text-xs font-bold mb-2">
                  Message*
                </p>
                <textarea
                  required
                  className=" no-resize appearance-none block w-full bg-back-2 text-front-text border border-back-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-front-2 focus:shadow-outline focus:outline-none text-front-text-2 font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

Contact.propTypes = {
  email: ProfileType.email,
}

export default Contact

export const query = graphql`
  query {
    profile: profileYaml {
      ...ProfileFragment
    }
  }
`
