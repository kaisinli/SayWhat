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
        {console.log(this.props, "props!!")}
        return (
            <div>
                <h1> SAY WHAT? </h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input name="text" type="text" className="form-control" placeholder="Say This" />
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
