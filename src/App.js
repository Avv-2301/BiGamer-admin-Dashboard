import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddGame from "./pages/AddGame";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/addproduct" element={<AddGame />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addcategory" element={<Category />} />
        </Route>

        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
