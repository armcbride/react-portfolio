import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import Home from "./pages/Home";
import Card from "./components/Card"
import Footer from "./components/Footer";
// import './App.css';
import projects from "./projects.json";

class App extends Component {
  state= {projects};
  
  render(){
  return (
   <Router>
     <div>
     <Navbar />
      <Wrapper>
        {/* <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Projects}/> */}
           
            {this.state.projects.map(project => (
              <Card>
              id={project.id}
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              live={project.live}
              repo={project.repo}
              </Card> 
            ))}
          
      </Wrapper>
      <Footer/>
     </div>
   </Router>

    //wrapper, header/nav, cards, footer...
    );
  }
}

export default App;
