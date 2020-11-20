import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { useState } from "react";

function App() {
  const [sideBarOpened, setsideBarOpened] = useState(true);

  return (
    <div className="App d-flex justify-content-between">
      <Sidebar sideBarOpened={sideBarOpened} setsideBarOpened={setsideBarOpened}/>
      <Dashboard sideBarOpened={sideBarOpened} setsideBarOpened={setsideBarOpened}/>
    </div>
  );
}

export default App;
