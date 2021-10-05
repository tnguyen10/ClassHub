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
            {showProfileIcon(key)}
          </Grid>
          <Grid item xs={5}>
            <p style={fontStyle}>{this.showCleanProfileKey(key)}</p>
          </Grid>
          <Grid item xs={6.5}>
            {this.state.currentlyEdited !== key && (
              <span style={fontStyle}>{value}</span>
            )}
            {this.state.currentlyEdited == key && (
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder={value}
                name={key}
                onChange={(e) => {
                  this.handleEditInput(e);
                }}
                ref="editiedTextField"
              />
            )}
            <span>
              {this.state.currentlyEdited !== key && (
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    this.handleEditButton(key, "edit");
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
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                    onClick={() => {
                      this.handleEditButton(key, "save");
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => {
                      this.handleEditButton(key, "cancel");
                    }}
                  >
                    Cancel
                  </Button>
                </span>
              )}
            </span>
          </Grid>
        </Grid>
        {key != "emergency_contact_phone_number" && <Divider />}
      </div>
    );
  }

  showCleanProfileKey(key) {
    return key.replaceAll("_", " ").toUpperCase()
  }

  handleEditButton(key, action) {
    if (action == "save") {
      console.log(key, this.state.currentlyEditiedValue);
      this.saveProfile(
        key,
        this.state.currentlyEditiedValue,
        this.loadProfile(() => {
          console.log("SET STATE");
          this.setState({ currentlyEdited: "" }, () => {
            this.loadProfile();
          });
        })
      );
      this.loadProfile();
    } else if (action == "cancel") {
      this.setState({ currentlyEdited: "" });
    } else {
      this.setState({ currentlyEdited: key });
    }
  }

  handleEditInput(event) {
    console.log(event.target.value);
    this.setState({ currentlyEditiedValue: event.target.value });
  }

  saveProfile(key, value, callback = null) {
    console.log("SAVE");
    const data = {};
    data[key] = value;
    console.log(data);
    fetch(PROFILE_ENDPOINT, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
        callback && callback();
      })
      .then((data) => {});
  }

  loadProfile(callback = null) {
    console.log("LOAD");
    fetch(PROFILE_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const profile = {};
        Object.entries(data).map(([key, value]) => {
          profile[key] = { value: value, editButtonState: false };
        });
        this.setState({ profile: profile });
        console.log(data);
        callback && callback();
      });
  }

  componentDidMount() {
    this.loadProfile();
  }

  render() {
    console.log(this.state, "state");
    return (
      <div style={profileStyle}>
        {this.state.profile &&
          Object.entries(this.state.profile).map(([key, value]) => {
            return this.showProfileInfo(key, value.value);
          })}
      </div>
    );
  }
}

export default Profile;
