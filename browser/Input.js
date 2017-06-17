import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchText } from './reducers'
import Output from './Output'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
        //this.toDisplay = this.toDisplay.bind(this)
    }
    submitHandler(event) {
        event.preventDefault()
        const text = {
            content: event.target.text.value
        }
        this.props.fetchText(text)
    }

    // toDisplay(num) {
    //     return num.toFixed(2)
    // }

    render() {
        return (
            <div className="container">
                <h1 className="display-4"> SAY WHAT? </h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <textarea name="text" rows="10" className="form-control" placeholder="Say This" />
                        <button style={{"margin" : "10px"}} className="btn btn-lg btn-primary" type="submit">Sentiment</button>
                    </div>
                </form>
                <Output mag={this.props.text.magnitude} score={this.props.text.score} />
            </div>
        ) 
    }


}

const mapDispatchToProps = { fetchText }
const mapStateToProps = ({text}) => ({text})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
