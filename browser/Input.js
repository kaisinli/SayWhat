import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchText, buttonClick, buttonUnClick, pushScore, pushMagnitude } from './reducers'
import Output from './Output'
import SpeechRecognition from 'react-speech-recognition'
import store from './store'
import Dict from './Dict'

console.log(fetchText)
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)

    }
    submitHandler(event) {
        event.preventDefault()
        console.log("event", event.target.text.value, event.target)
        const text = {
            content: event.target.text.value
        }
        this.props.fetchText(text)

    }
    clickHandler() {

        console.log("TSTS")
        store.dispatch(this.props.buttonClick())
        console.log("!")
    }

    render() {
        {
            console.log(this.props, "props")
        }
        return (
            <div className="container">
                <h1 size="200"> SAY WHAT? </h1>
                <style>

                </style>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <textarea name="text" rows="10" className="form-control" placeholder="Say This" />
                        <button style={{ "margin": "10px" }} id="sentimentBtn" className="btn btn-lg btn-primary" type="Submit">Submit</button>
                    </div>
                </form>
                <h2>Audio Input</h2>
                <button style={{ "margin": "10px" }} className="btn btn-success" type="submit" onClick={() => this.clickHandler()}>Start Recoring</button>

                {this.props.showComponent === true ?
                    <Dict />
                    : null}
                <Output mag={this.props.text.sentiment.magnitude} score={this.props.text.sentiment.score} entities={this.props.text.entities} />
                {console.log("input PROPZ", this.props.text.entities)}
            </div>
        )
    }
}

const mapDispatchToProps = { fetchText, buttonClick, buttonUnClick, pushScore, pushMagnitude }
const mapStateToProps = ({text, showComponent}) => ({ text, showComponent })

export default connect(mapStateToProps, mapDispatchToProps)(Input)