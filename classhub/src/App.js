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

const bodyStyle = {
  border: "solid",
  borderColor: "#4dabf5",
  minHeight:"65vh",
  marginLeft: "1%",
  borderWidth: "1px",
  borderRadius: "5px",
  marginTop: "10px"
};

export default function App() {
  return (
    <div style={appStyle}>
        <Overview />
      <div style={bodyStyle}>
        Good morning
      </div>
    </div>
  );
}
