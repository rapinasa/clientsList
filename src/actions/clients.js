export const setClients = client => dispatch => {
	setTimeout(()=>{
dispatch({
  type: 'SET_CLIENTS',
  payload: client
})}, 500)
}

export const fetchError = error => ({
  type: 'FETCH_ERROR',
  payload: error
});


export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const setSearchQuery = value => ({
  type: 'SET_QUERY',
  payload: value,
});



