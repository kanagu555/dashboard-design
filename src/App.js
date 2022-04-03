import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
        <NavbarHeader />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default App;
