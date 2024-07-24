import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
