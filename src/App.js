import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
   <Router>
     <div>
     <Navbar />
      <Wrapper>
        {/* <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Projects}/> */}
      </Wrapper>
      <Footer/>
     </div>
   </Router>

    //wrapper, header/nav, cards, footer...
  );
}

export default App;
