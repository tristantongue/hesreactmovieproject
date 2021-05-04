export const REVIEWS_FETCH_REQUEST = 'REVIEWS_FETCH_REQUEST'
export const REVIEWS_FETCH_SUCCESS = 'REVIEWS_FETCH_SUCCESS'
export const REVIEWS_FETCH_FAILURE = 'REVIEWS_FETCH_FAILURE'


export const getMovieReviews = () => ({
  type: REVIEWS_FETCH_REQUEST
});

export const returnMovieReviews = data => ({
  type: REVIEWS_FETCH_SUCCESS,
  payload: data
});

export const failMovieReviews = () => ({
  type: REVIEWS_FETCH_FAILURE
});