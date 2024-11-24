import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const NavigasiRoute = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Navbar />
      )}
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <NavigasiRoute />
    </Router>
  );
}

export default App;
