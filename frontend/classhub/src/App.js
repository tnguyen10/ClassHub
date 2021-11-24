import { BrowserRouter, Routes, Route } from "react-router-dom";

import Overview from "./components/Overview.js";
import Profile from "./components/Profile.js";
import ClassSchedule from "./components/ClassSchedule.js";

import {bodyStyle} from "./style.js"

const appStyle = {
  height: "100vh",
  margin: "10px",
  borderColor: "grey",
};

const appBodyStyle = {...{
  minHeight: "65vh",
  marginTop: "10px",
},...bodyStyle};

function styleWrap(style, component) {
  return (
    (style == "app" && <div style={appStyle}>{component}</div>) ||
    (style == "body" && <div style={appBodyStyle}>{component}</div>)
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={styleWrap("app", <Overview />)}>
          <Route path="profile" element={styleWrap("body", <Profile />)} />
          <Route path="class_schedule" element={styleWrap("body", <ClassSchedule />)} />
          <Route path="class_search" element={styleWrap("body", <Profile />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
