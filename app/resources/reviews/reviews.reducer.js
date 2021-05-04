import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE,
} from './reviews.actions'

const initialState = {
  data: []
}

export default (state = initialState, action) => {
  console.log('Action', action)

  switch (action.type) {
    case REVIEWS_FETCH_REQUEST:
      return state

    case REVIEWS_FETCH_SUCCESS:
      state = action.payload
      return state;

    case REVIEWS_FETCH_FAILURE:
      console.log(action.error);
      return state

    default:
      return state
  }
}
