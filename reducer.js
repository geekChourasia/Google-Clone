export const initialState = {
	term: null
}


export const actionTypes = {
	SET_SEARCH_TERM: "SET_SEARCH_TERM" //when ever we type it change the search page every search

}

// reducer has a job to listen any dispatch action


const reducer = (state, action) => {
	console.log(action)

	switch(action.type) {
		case actionTypes.SET_SEARCH_TERM:
			return {
				...state,
				term: action.term
			};

		default:
			return state;
	}
}

export default reducer;