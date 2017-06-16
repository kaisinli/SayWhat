import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const Output = (props) => {
 {console.log("we are in Output")}
    return (
        <div>
            <h2> Result </h2>
            <h4>Magnitude is {props.mag}</h4>
            <h4>Niceness score is {props.score}</h4>
        </div>
    )

}

const mapStateToProps = ({text}) => ({ text })

export default connect(mapStateToProps, null)(Output)
