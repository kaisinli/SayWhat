import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchText, buttonClick } from './reducers'
import Output from './Output'
import SpeechRecognition from 'react-speech-recognition'
import store from './store'

import Dict from './Dict'



/* So I wanted a toggle button, so that when the website is entered we can click "record" or
start or sth like that and only after clicking it would start recording.
that part works - but then if I click start again it stops but on the third click to re-start
recording it messes up
I tried doing it the redux-react way and tried the toggle part in our reducers instead of setState but it did not work
check the reducers file .
*/

console.log(fetchText)
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
      showComponent: false
    }
        this.submitHandler = this.submitHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)

    }
    submitHandler(event) {
        event.preventDefault()
        console.log("event", event.target.text.value, this.props.fetchText)
        const text = {
            content: event.target.text.value
        }
        this.props.fetchText(text)
    }


    clickHandler() {

        console.log("TSTS")
        //store.dispatch(this.props.buttonClick())
        if (this.state.showComponent === false)              //I added showComponent toggle so that when we click the button it alternates between true/false after each click
        this.setState({showComponent: true});
    else
                this.setState({showComponent: false});


        console.log(this.state)
    }

    render() {{
        console.log(this.props, "props")
    }
        return (
            <div className="container">
                <h1 size = "200"> SAY WHAT? </h1>
                <style>

                </style>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <textarea name="text" rows="10" className="form-control" placeholder="Say This" />
                        <br/>
                        <button className="btn" type="submit">SAY THIS</button>
                    </div>
                </form>
                <Output mag={this.props.text.magnitude} score={this.props.text.score} />
                <button  className="btn" onClick={() => this.clickHandler()}>Start</button>   {/* here when we click it renderes Dict component that statrs recoding */}
                {this.state.showComponent === true ?
                    <Dict />
                : null}

            </div>
        )
    }


}

const mapDispatchToProps = { fetchText, buttonClick}
const mapStateToProps = ({text, showComponent}) => ({text, showComponent})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
