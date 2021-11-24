import { Outlet, Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import ButtonGroup from "@mui/material/ButtonGroup";

import { fontStyle } from "../style.js";

const overviewFontStyle = { ...fontStyle, ...{ marginBottom: "-10px" } };
const buttonsStyle = {
  marginTop: "80px",
};

export default function Overview() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Avatar sx={{ width: 150, height: 150 }}></Avatar>
        </Grid>
        <Grid item xs={3}>
          <h1 style={overviewFontStyle}>John Smith</h1>
          <h3 style={overviewFontStyle}>ID: 1234567890</h3>
          <p style={overviewFontStyle}>Computer Science Major | Year 4</p>
        </Grid>
        <Grid item xs={7} style={buttonsStyle}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button startIcon={<PersonIcon />}><Link to="/profile">Profile</Link></Button>
            <Button startIcon={<CalendarTodayIcon />}><Link to="/class_schedule">Class Schedule</Link></Button>
            <Button startIcon={<SearchIcon />}><Link to="/class_search">Class Searches</Link></Button>
            <Button endIcon={<LogoutIcon />}><Link to="/logout">Logout</Link></Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
}
