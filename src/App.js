import React, { useState, useEffect } from "react";
import About from "./About";
import Footer from "./components/Footer";
import GoTotop from "./GoTotop";
import Home from "./Home";
import Roadmap from "./Roadmap";
import Token from "./Token";
import Loading from "./components/Loading";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);

  }, [])

  return (
    <>
        {loading ?
          <Loading loading={loading}/>
          :
          <div>
            <Home />
            <About />
            <Token />
            <Roadmap />
            <Footer />
            <GoTotop />
          </div>
        }
    </>
  );
}

export default App;
