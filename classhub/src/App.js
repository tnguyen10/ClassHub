import Overview from "./components/Overview.js";

const appStyle = {
  padding: '20px',
  border: 'solid',
  height: '100vh',
  margin: '10px',
  borderColor: 'grey'
}

export default function App() {
  return (
    <div style={appStyle}>
      <Overview />
    </div>
  );
}
