import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchText } from './reducers'
import Output from './Output'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler(event) {
        event.preventDefault()
        const text = {
            content: event.target.text.value
        }
        this.props.fetchText(text)
    }

    render() {
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
            </div>
        ) 
    }


}

const mapDispatchToProps = { fetchText }
const mapStateToProps = ({text}) => ({text})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
