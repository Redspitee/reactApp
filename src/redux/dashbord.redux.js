import {
	Toast
} from 'antd-mobile'

const ADD_NAME = 'add';
const REMOVE_NAME = 'remove';

export const Numer = (state = 10, action) => {
	switch (action.type) {
		case ADD_NAME:
			return state + 1;
		case REMOVE_NAME:
			return state - 1;
		default:
			return state
	}
}
export const ADD_ACTION = () => {
	return {
		type: ADD_NAME
	}
}
export const REMOVE_ACTION = () => {
	return {
		type: REMOVE_NAME
	}
}
export const ADD_ASYNC_ACTION = () => {
	return dispatch => {
		Toast.loading('加载中', 0)
		setTimeout(() => {
			Toast.hide()
			dispatch(ADD_ACTION())
		}, 2000)
	}
}