import {
    CRITICS_FETCH_REQUEST,
    CRITICS_FETCH_SUCCESS,
    CRITICS_FETCH_FAILURE,
  } from './critics.actions'

  const initialState = {
    data: []
  }

  export default (state = initialState, action) => {
    console.log('Action', action)
  
    switch (action.type) {
      case CRITICS_FETCH_REQUEST:
        return state
  
      case CRITICS_FETCH_SUCCESS:
        state = action.payload
        return state;
  
      case CRITICS_FETCH_FAILURE:
        console.log(action.error);
        return state
  
      default:
        return state
    }
  }
  