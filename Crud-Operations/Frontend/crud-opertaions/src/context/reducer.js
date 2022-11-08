import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  ALL_USER,
  HANDLE_CHANGE,
} from './action'
import { initialState } from './appcontext'

const reducer = (state, action) => {
  if (action.type === ALL_USER) {
    return {
      ...state,
      user: action.payload.user,
    }
  }
  if (action.type === CREATE_USER) {
    return { ...state }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }
}

export default reducer
