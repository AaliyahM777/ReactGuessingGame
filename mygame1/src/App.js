import React from 'react';
import './App.css';
import StandardMon from './StandardMon.js'
import ExpertMon from './ExpertMon.js'


class App extends React.Component { // react.component lets you use state for ym class my class component App
  constructor(props) { //allows me to use the keyword (this)
    super(props)// Have to have a super after contructor if you use class componenet, you need props to access this as well, super calls constructor of its parent class
    this.state = { // created  a state(initial state its in) ,laws your componenet has to follow 
      standardpressed: false, //  created a property standard pressed set the value of it to false
      expertpressed: false // created a property expert pressed set the value of it to false
    }
    this.runstandard = this.runstandard.bind(this) // binding the run standard function to the App component
    this.runexpert = this.runexpert.bind(this)// binding the run exoert function to the App component
  }



  runstandard() { // created function named runstandard
    this.setState({ standardpressed: true })// set the state of standard pressed to true
  }

  runexpert() { // created function named runexpert
    this.setState({ expertpressed: true }) // set the state of expert pressed to true
  }

  returnHome = () => {
    this.setState({
      ...this.state,
      standardpressed: false,
      expertpressed: false
    })
  }
  //
  render() {// render method helps put everything on the visible DOM aka page
    if (this.state.standardpressed) {// if statement check to see if the state of standard pressed is true
      return <StandardMon returnHome={this.returnHome} />// it then returns the StandardMon component(StandardMon.js)
    } else if (this.state.expertpressed) {//else if statement check to see if the state of expert pressed is true
      return <ExpertMon returnHome={this.returnHome} />// it then returns the ExpertMon component(ExpertMon.js)
    }
    return ( // returns what you see on the App component
      <div className="App"> {/* returns a div className of app */}
        <header className="Game-header">{/* returns a header className of Game-header that says start game */}
          Start Game
        </header>
        <div className="buttonstyle">{/* made a div class named buttonstyle*/}
          <button onClick={this.runstandard}>Standard Mon</button> {/* created a button onclick event (when button gets clicked, returns the runstandard function) */}
          <button onClick={this.runexpert}>Expert Mon</button> {/* created a button onclick event (when button gets clicked, returns the runexpertfunction) */}
        </div>
      </div>
    );
  }

}

export default App; // exporting App component so that we can reference it in other files
