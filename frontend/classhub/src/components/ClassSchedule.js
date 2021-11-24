import React, { Component } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export class ClassSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      semester: "",
      semesters: ["Fall 2019", "Winter 2020", "Fall 2020", "Winter 2021"],
    };
  }

  showSemesterSelection() {
    return (
      <FormControl variant="standard" sx={{ m: 1, ml: 50, minWidth: 300 }}>
        <InputLabel>Semester</InputLabel>
        <Select
          value={this.state.semester}
          onChange={(event) => {
            this.setState({ semester: event.target.value });
          }}
        >
          {this.state.semesters.map((s) => (
            <MenuItem value={s}>{s}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  render() {
    console.log(this.state);
    return <div>{this.showSemesterSelection()}</div>;
  }
}

export default ClassSchedule;
