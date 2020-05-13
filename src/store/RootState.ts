import { getStoreBuilder } from "vuex-typex"
import { AuthState } from "./modules/auth"

export interface RootState {
  auth: AuthState
}

export const storeBuilder = getStoreBuilder<RootState>()
