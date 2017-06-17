import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { fetchText, buttonClick } from './reducers'
import { connect } from 'react-redux'


const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
  constructor(props){
    super(props)
  this.clickHandler = this.clickHandler.bind(this)

  }
  clickHandler(sentence){
   console.log(sentence)
   const text = {
            content: sentence.transcript
        }
    this.props.fetchText(text)
  }
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
        <button onClick={() =>this.clickHandler({transcript})}>Stop</button>
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes


const mapDispatchToProps = { fetchText}
const mapStateToProps = ({text}) => ({text})

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition(Dictaphone))

