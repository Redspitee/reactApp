const ADD_NAME = 'add';
const REMOVE_NAME = 'remove';
export const reducerName = (state = 10, action) => {
	switch (action.type) {
		case ADD_NAME:
			return state + 1;
		case REMOVE_NAME:
			return state - 1;
		default:
			return state
	}
}
export const ADD_ACTION = ()=>{
	return {type:ADD_NAME}
}
export const REMOVE_ACTION = ()=>{
	return {type:REMOVE_NAME}
}
export const ADD_ASYNC_ACTION = ()=>{
	return dispatch => {
		setTimeout(()=>{
			dispatch(ADD_ACTION)
		},200)
	}
}