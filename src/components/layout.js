/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// React
import React from "react"

// Gatsby
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "./header"

// Material
import { makeStyles } from "@material-ui/core"

// CSS
import "./layout.css"

const useStyles = makeStyles({
  mainWrapper: {
    margin: `0 auto`,
    maxWidth: 1150,
    padding: `0 1.0875rem 1.45rem`,
  },
  svg: {
    fill: "#64ceaam",
    color: "#fffm",
    position: "absolutem",
    top: "0m",
    border: "0m",
    right: "0m",
  },
  path: {
    transformOrigin: "130px 106px",
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.mainWrapper}>
        <main>{children}</main>
        <footer></footer>
      </div>
      {/* <!-- Github --> */}
    </React.Fragment>
  )
}

export default Layout
