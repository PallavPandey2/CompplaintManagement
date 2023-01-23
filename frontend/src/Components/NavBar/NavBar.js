import React, { useState, useEffect } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "#143F6B",
  },
  heading: {
    color: "#fff",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: 'center',
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    display: `inline-block`,
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#3d8bdb",
    display: `inline-block`,
    padding: '12px',
  },
  logout: {
    background: "#3d8bdb",
    color: "#fff",
    display: `inline-block`,
  },

  Manage: {
    background: "#3d8bdb",
    color: "#fff",
  },
});

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/home");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
  }, [user]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="home" className="navbar-brand">
            Complaint
          </Link>
          {!user && <Link
            to="/signin"
            aria-current="page"
          >
            Sign in
          </Link>}
          <div className="" id="navbarNav" style={{ textAlign: 'right', display: 'inline-block', flexGrow: '1' }}>
            <div className="" style={{ display: 'inline-block' }}>
              {user && <div className={classes.profile}>
                <Avatar
                  className={classes.avatar}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
                <Typography className={classes.userName} variant="h6">
                  {user?.result.name}
                </Typography>
                <Button
                  variant="contained"
                  className={classes.logout}
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
