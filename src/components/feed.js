// React
import React from "react"

// Components
import Card from "./card"

// Material
import { makeStyles, Grid } from "@material-ui/core"

// Gataby
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
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
      <Grid container>
        {photos.map(photo => {
          return (
            <Grid xs={4} item key={photo.node.id} justifyContent="center">
              <Card
                caption={photo.node.caption}
                src={photo.node.thumbnails[4].src}
                timestamp={photo.node.timestamp}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
