import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ContentTable from "./components/ContentTable";

function App() {
  return (
    <div>
        <NavbarHeader />
        <Sidebar />
        <ContentTable />
        <Footer />
    </div>
  );
}

export default App;
