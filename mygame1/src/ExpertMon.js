import React, { Component } from 'react' // we intialize react here
import './ExpertMon.css'


class ExpertMon extends Component { // made a functional component called ButtonsMon and passed in props
    constructor(props) {
        super(props);
        console.log("WE JUST CONSTRUCTED");
        this.state = {
            correctValue: Math.floor((Math.random() * 100) + 1),
            guesses: 0
        };
    }

    setGuess = (e) => {
        this.setState({
            ...this.state,
            guessValue: e.target.value
        })
    }
    submitGuess = () => {
        console.log(this.state)
        const guesses = this.state.guesses + 1;
        const { highScore } = this.state;

        if (this.state.guessValue > this.state.correctValue) {
            alert(`TOO HIGH MON! Guesses:  ${guesses}`)
            this.setState({
                ...this.state,
                guesses
            })
        } else if (this.state.correctValue > this.state.guessValue) {
            alert(`TOO LOW MON! Guesses:  ${guesses}`)
            this.setState({
                ...this.state,
                guesses
            })
        } else {
            alert(`Yayy Mon! Guesses:  ${guesses}`)
            this.setState({
                ...this.state,
                guesses: 0,
                correctValue: Math.floor((Math.random() * 100) + 1),
                highScore: !highScore || guesses < highScore ? guesses : highScore
            })

            // Keep track of the high score
        }

    }


    render() {
        return ( // returns a p tag that says hello on DOM/page
            <div className="expertmon">
                <div className="Highscores">HighScore:{this.state.highScore}</div>
                <h1 className="heading1">This is Expert Mode</h1>
                <h2 className="heading2">Can you handle this mon!</h2>
                <h3 className="heading3">Guess a number from 1 to 100</h3>
                <input type="text" name="standard" onChange={this.setGuess} /> {/* made a input text section */}
                <input type="submit" onClick={this.submitGuess} />


                <button onClick={this.props.returnHome}>Go bak</button>

            </div>
        )
    }

}







export default ExpertMon // exported Buttonsmon functional component so we can refence it or import it in other files