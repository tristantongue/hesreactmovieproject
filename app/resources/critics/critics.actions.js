export const CRITICS_FETCH_REQUEST = 'CRITICS_FETCH_REQUEST'
export const CRITICS_FETCH_SUCCESS = 'CRITICS_FETCH_SUCCESS'
export const CRITICS_FETCH_FAILURE = 'CRITICS_FETCH_FAILURE'


export const getCritics = () => ({
  type: CRITICS_FETCH_REQUEST
});

export const returnCritics = data => ({
  type: CRITICS_FETCH_SUCCESS,
  payload: data
});

export const failCritics = () => ({
  type: CRITICS_FETCH_FAILURE
});