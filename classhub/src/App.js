import Grid from "@mui/material/Grid";

import Overview from "./components/Overview.js";
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';

const appStyle = {
  height: "100vh",
  margin: "10px",
  borderColor: "grey",
};

const columnStyle = {
  border: "solid",
  borderColor: "#4dabf5",
  minHeight:"65vh",
  marginLeft: "1%",
  borderWidth: "1px",
  borderRadius: "5px",
};

const innerStyle = {
  marginLeft: "3%",
  borderColor: "grey",
  padding: "10px",
  margin: "10px",
};

const buttonStyle = {
  width: "100%",
  padding: "10%",
  marginBottom: "10%",
};

export default function App() {
  return (
    <div style={appStyle}>
      <div style={innerStyle}>
        <Overview />
      </div>
      <div style={innerStyle}>
        <Grid container>
          <Grid item xs={3}>
            <Button variant="outlined" startIcon={<PersonIcon/>} style={buttonStyle}>
              Profile
            </Button>
            <Button variant="outlined" startIcon={<CalendarTodayIcon/>} style={buttonStyle}>
              Class Schedule
            </Button>
            <Button variant="outlined" startIcon={<SearchIcon/>} style={buttonStyle}>
              Class Searches
            </Button>{" "}
          </Grid>
          <Grid item xs={9}>
            <div style={columnStyle}>good morning</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
