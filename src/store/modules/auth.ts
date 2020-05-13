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
