import { useContext, useReducer, createContext } from 'react'
import jwtDecode from 'jwt-decode'
import { Action, Dispatch, State, UserStateType } from './types'
const windowContext = typeof window !== 'undefined'
const initialState = {
	user: null,
	loading: false
}

if (windowContext) {
	if (window.localStorage.getItem('token')) {
		const decodedToken: { exp: number } = jwtDecode(window.localStorage.getItem('token'))

		if (decodedToken.exp * 1000 < Date.now()) {
			window.localStorage.removeItem('token')
		} else {
			initialState.user = decodedToken
		}
	}
}

const UserStateContext = createContext<UserStateType>(undefined)
const UserDispatchContext = createContext<{ dispatch: Dispatch } | undefined>(undefined)

const authReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload
			}
		case 'LOGOUT':
			return {
				...state,
				user: null
			}
		default:
			return state
	}
}

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState)

	const login = (userData) => {
		window.localStorage.setItem('token', userData.token)
		dispatch({
			type: 'LOGIN',
			payload: userData
		})
	}
	const logout = () => {
		window.localStorage.removeItem('token')
		dispatch({ type: 'LOGOUT' })
	}

	return (
		<UserDispatchContext.Provider value={{ dispatch }}>
			<UserStateContext.Provider value={{ state, login, logout }}>
				{children}
			</UserStateContext.Provider>
		</UserDispatchContext.Provider>
	)
}

export const useAuth = () => useContext<UserStateType>(UserStateContext)
export const useDispatchAuth = () => useContext<{ dispatch: Dispatch }>(UserDispatchContext)
