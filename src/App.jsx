import React, { useState, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import All from "./menu/All";

import "./header.css";
import "./footer.css";

const App = () => {
  const [Page, setPage] = useState("home");

  const ChangePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [Page]);

  const renderPage = () => {
    switch (Page) {
      case "home":
        return <Home />;
      case "menu":
        return <All />;
      default:
        return <Home />;
    }
  };

  return (
    <section className="App">
      <Header ChangePage={ChangePage} />
      {renderPage()}
      <Footer />
    </section>
  );
};

export default App;
