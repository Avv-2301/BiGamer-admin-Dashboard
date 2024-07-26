import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddGame from "./pages/AddGame";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {
  return (
    <div>
      <Routes>
          <Route element={<Dashboard/>}>
            <Route path="/addproduct" element={<AddGame/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
          </Route>
          

        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
