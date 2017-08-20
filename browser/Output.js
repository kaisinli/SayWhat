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
                {console.log('PROPS.ENTITIES', props.entities)}
                <h3>More Information:</h3>
                <h4>{props.entities.map(entity => {

                    console.log("METADATA", entity.metadata)
                    console.log("NAME", entity.name)
                    // return(<h5>HElP</h5>)
                    if (entity.metadata !== undefined && !_.isEmpty(entity.metadata))
                        return (
                            <div>
                                <a href={entity.metadata.wikipedia_url} target="_blank">{entity.name}</a>
                                <br />
                            </div>
                        )
                })
                }

                </h4>
            </div>
            {(() => {
                switch (true) {
                    case props.score.toPrecision(2) < -0.4:
                        return <h3>This article is: <b>Strongly Negative</b></h3>
                    case props.score.toPrecision(2) < -0.2 && props.score.toPrecision(2) >= -0.4:
                        return <h3>This article is: Negative</h3>
                    case props.score.toPrecision(2) < -0.1 && props.score.toPrecision(2) >= -0.2:
                        return <h3>This article is: Slightly Negative</h3>
                    case props.score.toPrecision(2) < 0.1 && props.score.toPrecision(2) >= -0.1:
                        return <h3>This article is: Neutral</h3>
                    case props.score.toPrecision(2) < 0.2 && props.score.toPrecision(2) >= 0.1:
                        return <h3>This article is: Slightly Positive</h3>
                    case props.score.toPrecision(2) < 0.4 && props.score.toPrecision(2) >= 0.2:
                        return <h3>This article is: Positive</h3>
                    case props.score.toPrecision(2) > 0.4:
                        return <h3>This article is: Strongly Positive</h3>
                    default:
                        null
                }
            })()}

        </div>
    )
}


export default Output
