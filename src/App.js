import React, {Component} from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Layouts/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Layouts/Footer";
import './style.css';



class App extends Component {
  
  render(){
  return (
   <Router>
     <div>
     <Navbar />
     
      <Wrapper>
        <Route exact path="/About" component={About}/>
        <Route exact path="/projects" component={Projects}/>
      </Wrapper>
      <Footer/>
     </div>
   </Router>
    );


  }
}

export default App;
