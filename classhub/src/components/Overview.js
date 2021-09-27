import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

const overviewStyle = {
  border: "solid",
  height: "20%",
  marginLeft: "3%",
  borderColor: "grey",
  padding: "10px",
};

const fontStyle = {
  fontFamily: "Verdana",
  color: "#525252",
  marginBottom: "-10px",
};

const logoutButtonStyle = {
  marginTop:"10px"
}

export default function Overview() {
  return (
    <div style={overviewStyle}>
      <Grid container>
        <Grid item xs={2}>
          <Avatar sx={{ width: 150, height: 150 }}></Avatar>
        </Grid>
        <Grid item xs={8}>
          <h1 style={fontStyle}>First Last</h1>
          <h3 style={fontStyle}>ID: 1234567890</h3>
          <p style={fontStyle}>Program Name | Year 4</p>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" endIcon={<LogoutIcon/>} style={logoutButtonStyle}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
