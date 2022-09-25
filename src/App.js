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
import Verify from "./pages/Verify";
function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route
          path="/dashboard"
          element={
            currentUser === null ||
            currentUser.isVerified === false ||
            currentUser.message === "A Confirmation Email Has Been Sent!!!" ? (
              <Navigate to="/" />
            ) : (
              <Dashboard />
            )
          }
        />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/aboutus" exact element={<About />} />
        <Route path="/laoder" exact element={<Loader />} />
        <Route path="/productbuy" exact element={<Bought />} />
        <Route path="/successbought" exact element={<SuccessBought />} />
        <Route path="/successrent" exact element={<SuccessRent />} />
        <Route path="/productrent" exact element={<Rent />} />
        <Route path="/confirm/:id/:token" exact element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default App;
