import Avatar from "@mui/material/Avatar";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";

const overviewStyle = {
  height: "20%",
  marginLeft: "3%",
  borderColor: "grey",
  padding: "10px"
};

const fontStyle = {
  fontFamily: "Verdana",
  color: "#525252",
  marginBottom:"-10px",
}

export default function Overview() {
  return (
    <div style={overviewStyle}>
      <Grid container>
        <Grid item xs={2}>
          <Avatar sx={{ width: 150, height: 150 }}></Avatar>
        </Grid>
        <Grid item xs={10}>
          <h1 style={fontStyle}>First Last</h1>
          <h3 style={fontStyle}>ID: 1234567890</h3>
          <p style={fontStyle}>Program Name | Year 4</p>
        </Grid>
      </Grid>
    </div>
  );
}
