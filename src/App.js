import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App d-flex justify-content-between">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
