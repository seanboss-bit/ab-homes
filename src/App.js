import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import Bought from "./pages/Bought";
import Rent from "./pages/Rent";
import SuccessBought from "./pages/SuccessBought";
import SuccessRent from "./pages/SuccessRent";
function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={currentUser === null ? <Navigate to="/" /> : <Dashboard />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/laoder" element={<Loader />} />
        <Route path="/productbuy" element={<Bought />} />
        <Route path="/successbought" element={<SuccessBought />} />
        <Route
          path="/successrent"
          element={<SuccessRent />}
        />
        <Route
          path="/productrent"
          element={<Rent  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
