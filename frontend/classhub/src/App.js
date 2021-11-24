import { BrowserRouter, Routes, Route } from "react-router-dom";

import Overview from "./components/Overview.js";
import Profile from "./components/Profile.js";

const appStyle = {
  height: "100vh",
  margin: "10px",
  borderColor: "grey",
};

const bodyStyle = {
  border: "solid",
  borderColor: "#4dabf5",
  minHeight: "65vh",
  marginLeft: "1%",
  borderWidth: "1px",
  borderRadius: "5px",
  marginTop: "10px",
  overflow: "auto",
};

function styleWrap(style, component) {
  return (
    (style == "app" && <div style={appStyle}>{component}</div>) ||
    (style == "body" && <div style={bodyStyle}>{component}</div>)
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={styleWrap("app", <Overview />)}>
          <Route path="profile" element={styleWrap("body", <Profile />)} />
          <Route path="class_schedule" element={styleWrap("body", <Profile />)} />
          <Route path="class_search" element={styleWrap("body", <Profile />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
