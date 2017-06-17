import axios from 'axios'
import { browserHistory } from 'react-router'

const initialState = {
  text: {magnitude : '', score: ''},
  analysis: {},
  showComponent : false   //added new key : value
}

/* -------------------------- REDUCER --------------------------- */

/* I added a CLICK action so that showComponent can change between true flase and render Dict compoennt based on truthy falsy values*/
const reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_TEXT:
    return Object.assign({}, newState, {text: action.text})
  case CLICK:
  /* THIS DID NOT WORK !!!!!****************/
  console.log(state.showComponent, "Component")
let show = !state.showComponent
  console.log('statehow',show, 'state',state.showComponent, "!!!$^#^#")

    return Object.assign({}, newState, {showComponent: true})



  default:
    return state
  }
}

/* --------------------------- ACTIONS -------------------------- */
const GET_TEXT = 'GET_TEXT'
const CLICK = 'CLICK'   //NEW ACTION
const STOP = 'STOP'



/* ---------------------- ACTION CREATOR ------------------------ */
export const getText = text =>   {
  return {
  type: GET_TEXT, text
  }
}

export const buttonClick = text =>   {
  return {
  type: CLICK
  }
}

export const buttonUnClick = text =>   {   // THIS IS EXTRA I THINK BUT WILL KEEP FOR NOW
  return {
  type: STOP
  }
}

/* ------------------------- DISPATCHER -------------------------- */
export const fetchText = (text) =>
  dispatch =>
    axios.post('/api/text', text)
      .then(res =>
         dispatch(getText(res.data))
      )
      .catch(err => console.error('Fetching text unsuccessful', err))



export default reducer
