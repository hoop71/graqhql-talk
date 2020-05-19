// React
import React from "react"

// Components
import Layout from "../components/layout"
import Feed from "../components/feed"
import SEO from "../components/seo"

// Material
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  feedWrapper: {
    marginBottom: `1.45rem`,
  },
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.feedWrapper}>
        <Feed />
      </div>
    </Layout>
  )
}

export default IndexPage
