import axios from 'axios'
import { browserHistory } from 'react-router'

const initialState = {
  text: '',
  analysis: {}
}

/* ------------------------ REDUCER ------------------------ */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_TEXT:
    return Object.assign({}, state, {text: action.text})
  default:
    return state
  }
}

/* ------------------------ ACTIONS ------------------------ */
const GET_TEXT = 'GET_TEXT'

/* -------------------- ACTION CREATOR --------------------- */
export const getText = text => ({
  type: GET_TEXT, text
})

/* ----------------------- DISPATCHER ------------------------ */
export const fetchText = () =>
  dispatch =>
    axios.get('/api/text')
      .then(res => dispatch(getText(res.data)))
      .catch(err => console.error('Fetching text unsuccessful', err))

export default reducer