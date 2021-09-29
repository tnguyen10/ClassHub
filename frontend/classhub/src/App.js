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

export default function App() {
  return (
    <div style={appStyle}>
      <Overview />
      <div style={bodyStyle}>
        <Profile />
      </div>
    </div>
  );
}
