// React
import React from "react"

// Components
import Card from "./card"

// Material
import { makeStyles } from "@material-ui/core"

// Gataby
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1em",
    flexWrap: "wrap",
  },
})

export default () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query InstaFeedData {
      allInstaNode {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(width: 315, height: 315) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            # Only available with the public api scraper
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)
  const photos = data.allInstaNode.edges
  return (
    <div className={classes.wrapper}>
      {photos.map(photo => {
        return (
          <div>
            <Card
              src={photo.node.thumbnails[4].src}
              caption={photo.node.caption}
            />
          </div>
        )
      })}
    </div>
  )
}
