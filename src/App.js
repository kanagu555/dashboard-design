import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ContentTable from "./components/ContentTable";
import './App.css'

function App() {
  return (
    <div>
      <NavbarHeader />
      <div className="flex-center">
        <Sidebar />
        <ContentTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
