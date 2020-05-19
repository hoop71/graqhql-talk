import React from "react"
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    padding: "1em",
    margin: ".25em",
    "&:hover": {
      backgroundColor: "#e0dede",
    },
  },
  media: {
    height: 315,
    width: 315,
  },
  caption: {
    maxHeight: "100px",
    overflowY: "scroll",
    backgroundColor: "white",
    padding: "1em",
    borderRadius: "3px",
  },
})

export default function MediaCard({ caption, src }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} raised>
      <CardMedia
        className={classes.media}
        image={src}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.caption}
        >
          {caption}
        </Typography>
      </CardContent>
    </Card>
  )
}
