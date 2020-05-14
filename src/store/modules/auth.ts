import { BareActionContext } from "vuex-typex"
import { storeBuilder, RootState } from "@/store/RootState"

interface User {
  name: string
}

// state
export class AuthState {
  authUser: User | null = null
}

const b = storeBuilder.module<AuthState>("auth", new AuthState())

// getters
const authUser = b.read((state) => state.authUser, "authUser")

export const getters = {
  get authUser() {
    return authUser()
  },
}

// mutations
function setUser(state: AuthState, user: User) {
  state.authUser = user
}

export const mutations = {
  setUser: b.commit(setUser),
}

// actions

type ActionContext = BareActionContext<AuthState, RootState>

async function login(
  context: ActionContext,
  payload: { username: string; password: string }
) {
  const { username, password } = payload
  const user = await fakeUserLoginService(username, password)
  if (user) {
    mutations.setUser(user)
  }
}

export const actions = {
  login: b.dispatch(login),
}

async function fakeUserLoginService(
  username: string,
  password: string
): Promise<User | null> {
  return {
    name: "Fake User",
  }
}
