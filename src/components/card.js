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
    paddingBottom: 0,
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
    maxHeight: "120px",
    overflowY: "scroll",
    backgroundColor: "white",
    padding: "1em",
    borderRadius: "3px",
  },
  timestamp: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
  },
})

export default function MediaCard({ caption, src, timestamp }) {
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
          className={classes.caption}
          color="textSecondary"
          component="p"
          variant="body2"
        >
          {caption}
        </Typography>
        {/* <Typography className={classes.timestamp} variant="caption">
          {new Date(timestamp * 1000).toLocaleString()}
        </Typography> */}
      </CardContent>
    </Card>
  )
}
