import "./AboutMe.scss";

import { Avatar, Card, CardContent, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";

import avatar from "../../assets/images/avatar.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    }
  })
);
export const AboutMe = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      id="about-me"
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid item lg={5}>
        <div className="avatar">
          <Avatar alt="alfred avatar" src={avatar} className={classes.large} />
        </div>
        <div className="intro">Hi.</div>
        <div className="about-me-msg">
          I'm a Software Engineer based in Manila, Philippines.
          <div>I like to play with design challenges on dribble, and</div>
          <div>I enjoy making web pages responsive.</div>
        </div>
      </Grid>
    </Grid>
  );
};
