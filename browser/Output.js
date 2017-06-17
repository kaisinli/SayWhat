import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const Output = (props) => {
    return (
        <div>
            <h2>Result</h2>
            <h4>Sentiment Score is {props.score}</h4>
            <h4>Sentiment Magnitude is {props.mag}</h4>
        </div>
    )

}

const mapStateToProps = ({text}) => ({ text })

export default connect(mapStateToProps, null)(Output)
