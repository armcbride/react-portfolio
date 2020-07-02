import React, {Component} from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Layouts/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
// import Contact from './pages/Contact';
import Footer from "./components/Layouts/Footer";
import './style.css';



class App extends Component {
  
  render(){
  return (
   <Router>
     <>
     <Wrapper>
      <Navbar />
        <Route exact path="/react-portfolio" component={About}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/Projects" component={Projects}/>
        <Footer/>
      </Wrapper>
     </>
   </Router>
    );


  }
}

export default App;
