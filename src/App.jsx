import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminLogout from "./components/AdminLogout.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <Navbar />
        <Services />
      </>
    ),
  },
  {
    path: "/admindashboard",
    element: (
      <>
        <Navbar />
        <AdminDashboard />
      </>
    ),
  },
  {
    path: "/adminlogin",
    element: (
      <>
        <Navbar />
        <AdminLogin />
      </>
    ),
  },
  {
    path: "/adminlogout",
    element: (
      <>
        <Navbar />
        <AdminLogout />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <div>404 Not Found</div>
      </>
    ),
  },
]);

function App() {
  return (
    <div className="MainContainer">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;