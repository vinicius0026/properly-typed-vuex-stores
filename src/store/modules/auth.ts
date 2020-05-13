// state

interface User {
  name: string
}

interface AuthState {
  authUser: User | null
}

const state: AuthState = {
  authUser: null
}

// getters
function authUser(state: AuthState) {
  return state.authUser
}

const getters = {
  authUser,
}

// mutations
function setUser(state: AuthState, user: User) {
  state.authUser = user
}

const mutations = {
  setUser,
}

// actions
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}