import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { pushScore, pushMag } from './reducers'
import lodash from "lodash"

const Output = (props) => {
    { console.log('props output', props) }
    return (
        <div>
            <div>
                <h3>Results</h3>
                <h4>Sentiment Score: {props.score.toPrecision(2)}</h4>
                <h4>Sentiment Magnitude: {props.mag.toPrecision(2)}</h4>
                <br />
                <h3>More Information:</h3>
                {console.log('PROPS.ENTITIES', props.entities)}
                <h4>{props.entities.map(entity => {

                    console.log("METADATA", entity.metadata)
                    console.log("NAME", entity.name)
                    // return(<h5>HElP</h5>)
                    if (entity.metadata !== undefined && !_.isEmpty(entity.metadata))
                        return (
                            <div>
                                <a href={entity.metadata.wikipedia_url}>{entity.name}</a>
                                <br />
                            </div>
                        )
                })
                }

                </h4>
            </div>
            {(() => {
                switch (true) {
                    case props.score === 0:
                        return <h4>You're feeling: Neutral</h4>
                    case props.score.toPrecision(2) < 0 && props.score >= -0.2:
                        return <h4>You're feeling: Slightly Negative</h4>
                    case props.score < -0.2 && props.score >= -0.4:
                        return <h4>You're feeling: Negative</h4>
                    case props.score < -0.4:
                        return <h4>You're feeling: Strongly Negative</h4>
                    case props.score > 0 && props.score <= 0.2:
                        return <h4>You're feeling: Neutral</h4>
                    case props.score > 0.2 && props.score <= 0.4:
                        return <h4>You're feeling: Slightly Positive</h4>
                    case props.score > 0.3 && props.score <= 0.5:
                        return <h4>You're feeling: Positive</h4>
                    case props.score > 0.5:
                        return <h4>You're feeling: Strongly Positive</h4>
                    default:
                        null
                }
            })()}

        </div>
    )
}


export default Output
