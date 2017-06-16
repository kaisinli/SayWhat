import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchText } from './reducers'


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            analysis: {}
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Text</label>
                    <input name="text" />
                    <button type="submit" className="btn btn-xs btn-primary">Say What?</button>
                </form>
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault()
        const text = {
            content: event.target.text.value,
        }
    }
}

const mapDispatchToProps = {fetchText}

export default connect(state => state, mapDispatchToProps)(Input)
