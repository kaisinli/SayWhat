import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const Output = (props) => {
    return (
        <div>
            <div>
                <h2>Results</h2>
                <h4>Sentiment Score: {props.score}</h4>
                <h4>Sentiment Magnitude: {props.mag}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = ({text}) => ({ text })

export default connect(mapStateToProps, null)(Output)
