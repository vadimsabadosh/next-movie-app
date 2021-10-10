export type State = {
	user: any
	loading: boolean
}
export type Payload = {
	loading?: boolean
	user?: any
}
export type Action = { type: 'LOGIN'; payload: Payload } | { type: 'LOGOUT' }

export type Dispatch = (action: Action) => void
export type UserStateType = {
	state: State
	login: (userData) => any
	logout: () => void
}
