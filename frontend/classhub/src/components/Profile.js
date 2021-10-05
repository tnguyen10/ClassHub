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
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { fontStyle } from "../style.js";
import { PROFILE_ENDPOINT } from "../static.js";

const profileStyle = {
  margin: "20px",
  padding: "10px",
  overflow: "auto",
};

const saveButtonStyle = {
  marginRight: "10px",
  marginLeft: "10px",
};

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      currentlyEdited: "",
      currentlyEditiedValue: "",
    };
  }

  showProfileInfo(key, value) {
    return (
      <div>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={0.5}>
            {this.showProfileIcon(key)}
          </Grid>
          <Grid item xs={5}>
            {this.showProfileKey(key)}
          </Grid>
          <Grid item xs={6.5}>
            {this.showProfileValue(key, value)}
            {this.showProfileButtons(key)}
          </Grid>
        </Grid>
        {key != "emergency_contact_phone_number" && <Divider />}
      </div>
    );
  }

  showProfileIcon(key) {
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

  showProfileKey(key) {
    return <p style={fontStyle}>{key.replaceAll("_", " ").toUpperCase()}</p>;
  }

  showProfileValue(key, value) {
    return (
      <span>
        {this.state.currentlyEdited !== key && (
          <span style={fontStyle}>{value}</span>
        )}
        {this.state.currentlyEdited == key && (
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder={value}
            name={key}
            onChange={(event) => {
              this.handleEditInput(event);
            }}
          />
        )}
      </span>
    );
  }

  showProfileButtons(key) {
    return (
      <span>
        {this.state.currentlyEdited !== key && (
          <IconButton
            aria-label="edit"
            onClick={() => {
              this.handleProfileButtons(key, "edit");
            }}
          >
            <EditIcon />
          </IconButton>
        )}
        {this.state.currentlyEdited == key && (
          <span>
            <Button
              variant="outlined"
              size="small"
              color="success"
              style={saveButtonStyle}
              onClick={() => {
                this.handleProfileButtons(key, "save");
              }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={() => {
                this.handleProfileButtons(key, "cancel");
              }}
            >
              Cancel
            </Button>
          </span>
        )}
      </span>
    );
  }

  handleProfileButtons(key, action) {
    if (action == "save") {
      this.updateProfile(key, this.state.currentlyEditiedValue, () => {
        this.setState({ currentlyEdited: "" }, () => {
          this.loadProfile();
        });
      });
    } else if (action == "cancel") {
      this.setState({ currentlyEdited: "" });
    } else {
      this.setState({ currentlyEdited: key });
    }
  }

  handleEditInput(event) {
    this.setState({ currentlyEditiedValue: event.target.value });
  }

  updateProfile(key, value, callback = null) {
    const data = {};
    data[key] = value;
    fetch(PROFILE_ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        callback && callback();
      });
  }

  loadProfile(callback = null) {
    fetch(PROFILE_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ profile: data });
      });
  }

  componentDidMount() {
    this.loadProfile();
  }

  render() {
    return (
      <div style={profileStyle}>
        {this.state.profile &&
          Object.entries(this.state.profile).map(([key, value]) => {
            return this.showProfileInfo(key, value);
          })}
      </div>
    );
  }
}

export default Profile;
