const LOGIN = 'login';
const LOGOUT = 'logout';
// 登陆状态reducer
export const Loger = (state = { isLog: false, username: "zxy" },action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLog: true
			}
		case LOGOUT:
			return {
				...state,
				isLog: false
			}
		default:
			return state
	}
}
//action Creators
export const LOG_IN = ()=>{
	return {type: LOGIN}
} 
export const LOG_OUT = ()=>{
	return {type: LOGOUT}
} 
