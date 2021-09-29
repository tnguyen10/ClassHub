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

const profileStyle = {
  margin: "20px",
  padding: "10px",
  overflow: "auto",
};

const userInfos = {
  name: "John Smith",
  date_of_birth: "01/01/2021",
  country: "Argentina",
  us_citizenship: "Unknown",
  address: "101 TownsBeach CA, USA",
  email: "johnsmith@email.com",
  phone_number: "(000)-000-0000",
  emergency_contact_name: "Bob Smith",
  emergency_contact_email: "bobsmith@email.com",
  emergency_contact_phone_number: "(111)-111-1111",
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

export default function Profile() {
  return (
    <div style={profileStyle}>
      {Object.entries(userInfos).map(([key, value]) => {
        return showProfileInfo(key, value);
      })}
    </div>
  );
}
