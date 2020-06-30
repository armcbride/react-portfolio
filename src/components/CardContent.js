import React, {Component} from 'react';

import Card from './Card/index';

const projects = [{
    id: 1,
    title: "Libations",
    image: require("../assets/libations.jpg"),
    description: "Libations is a web application utlizing api calls to find breweries, brewpubs, and beer bars in a given US city as well as the weather, UV index, and five day forecast.",
    live: "https://armcbride.github.io/libations/",
    repo: "https://github.com/armcbride/libations/"
  }, 
  {
  id: 2,
  title: "Devexicon",
  image: require("../assets/dev-page.PNG"),
  description: "Devexicon is an input friendly collection of develop terms, to assist a developer refresh their memory on coding concepts, terms, and coding examples. This application features: Heroku, mySQL, Node, Express, and Sequelize.",
  live: "https://devexicon.herokuapp.com/",
  repo: "https://github.com/armcbride/devexicon/"
  },
  {
  id: 3,
  title: "Meet Between Buns",
  image: require("../assets/meet-between-preview.PNG"),
  "description": "Burger menu application with Express, mySQL, Heroku, and Handlebars",
  live: "https://meetbetweenbuns.herokuapp.com/",
  repo: "https://github.com/armcbride/meet-between-buns/"
  },
  {
  id: 4,
  title: "Password Generator",
  image: require("../assets/password-generator-screenShot.PNG"),
  description: "Create a unique password with selected parameters with a simple web application using javaScript.",
  live: "https://armcbride.github.io/password-generator/",
  repo: "https://github.com/armcbride/password-generator/"
  },
  {
  id: 5,
  title: "Save Your Thoughts",
  image: require("../assets/thought-demo.PNG"),
  description: "Keep your thoughts organized in one place with this NodeJs and Express application",
  live: "https://thought-saver.herokuapp.com/",
  repo: "https://github.com/armcbride/thought-saver"
  },
  {
  id: 6,
  title: "Slasher Fic",
  image: require("../assets/slasher-front.PNG"),
  description: "This Slasher-fic starter is a table top game for up to 6 adult players. The rules are loosely based on the well known Dungeons and Dragons stats and dice rolling mechanics. This fic is based loosely off of H.H. Holmes and his murder hotel. The application features HTML, CSS, and Javascript. ",
  live: "https://armcbride.github.io/slasher-fic/",
  repo: "https://github.com/armcbride/slasher-fic"
  },
  {
  id: 7,
  title: "Track That Workout",
  image: require("../assets/track-that-main.PNG"),
  description: "Stay organized on your daily workouts with a simple Mongo and Express application",
  live: "https://track-that-workout.herokuapp.com/",
  repo: "https://github.com/armcbride/track-that"
  }
  ];

class cardContent extends Component {
    
  constructor(props) {
        super(props); this.state ={projects}
      }
      render(){
    return (
        <>
            {this.state.projects.map(project => (
              <Card
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              live={project.live}
              repo={project.repo}
              /> 
            ))}  
        </>
    )
}
}
export default cardContent;
