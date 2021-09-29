import React, { Component } from "react";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import PersonIcon from "@mui/icons-material/Person";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CakeIcon from "@mui/icons-material/Cake";
import PublicIcon from "@mui/icons-material/Public";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WarningIcon from "@mui/icons-material/Warning";
import EditIcon from "@mui/icons-material/Edit";

import { fontStyle } from "../style.js";
import { PROFILE_ENDPOINT } from "../static.js";

const profileStyle = {
  margin: "20px",
  padding: "10px",
  overflow: "auto",
};

function showProfileInfo(key, value) {
  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={0.5}>
          {showProfileIcon(key)}
        </Grid>
        <Grid item xs={5}>
          <p style={fontStyle}>{key.replaceAll("_", " ").toUpperCase()}</p>
        </Grid>
        <Grid item xs={6.5}>
          <span style={fontStyle}>{value}</span>
          <span>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </span>
        </Grid>
      </Grid>
      {key != "emergency_contact_phone_number" && <Divider />}
    </div>
  );
}

function showProfileIcon(key) {
  switch (key) {
    case "name":
      return <PersonIcon />;
    case "date_of_birth":
      return <CakeIcon />;
    case "country":
      return <PublicIcon />;
    case "us_citizenship":
      return <EmojiFlagsIcon />;
    case "address":
      return <HomeIcon />;
    case "email":
      return <EmailIcon />;
    case "phone_number":
      return <PhoneIcon />;
    case key.substring("emergency_contact"):
      return <WarningIcon />;
    default:
      return <CheckBoxOutlineBlankIcon />;
  }
}

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { profile: {} };
  }

  componentDidMount() {
    fetch(PROFILE_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ profile: data });
        console.log(data);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div style={profileStyle}>
        {this.state.profile &&
          Object.entries(this.state.profile).map(([key, value]) => {
            return showProfileInfo(key, value);
          })}
      </div>
    );
  }
}

export default Profile;
