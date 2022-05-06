import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  createStyles,
  makeStyles,
  Theme,
  Button,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      paddingRight: "30px",
      display: "inline-block",
    },
  })
);

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    borderRadius: "0px",
  },
}))(Button);

const LinkButton = ({ linkTo, text }: any) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const addStyle =
    location.pathname === linkTo ? { borderBottom: "1px solid #3f51b5" } : {};
  return (
    <div className={classes.link}>
      <ColorButton
        onClick={() => {
          navigate(linkTo);
        }}
        style={addStyle}
      >
        {text}
      </ColorButton>
    </div>
  );
};

export const Links = () => {
  return (
    <div style={{ borderBottom: "1px solid #e1e4e8" }}>
      <LinkButton linkTo="/" text="Overview" />
      <LinkButton linkTo="/profile" text="Profile" />
      <LinkButton linkTo="/settings" text="Settings" />
    </div>
  );
};
