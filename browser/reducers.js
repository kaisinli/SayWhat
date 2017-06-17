import axios from 'axios'
import { browserHistory } from 'react-router'

const initialState = {
  text: '',
  analysis: {}
}

/* -------------------------- REDUCER --------------------------- */
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_TEXT:
    return Object.assign({}, newState, {text: action.text})
  default:
    return state
  }
}

/* --------------------------- ACTIONS -------------------------- */
const GET_TEXT = 'GET_TEXT'

/* ---------------------- ACTION CREATOR ------------------------ */
export const getText = text =>   {
  return {
  type: GET_TEXT, text
  }
}

/* ------------------------- DISPATCHER -------------------------- */
export const fetchText = (text) =>
  dispatch =>
    axios.post('/api/text', text)
      .then(res => {
        console.log('RES.DATA', res.data)
        return dispatch(getText(res.data))
      })
      .catch(err => console.error('Fetching text unsuccessful', err))

export default reducer