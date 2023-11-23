import { User } from "@supabase/gotrue-js";

export enum ProfilePermissions {
  COMMENTS = 'comments',
  CANDIDATES = 'candidates',
  OFFERS = 'offers',
}

export interface Profile {
  user: User | null
  username: string
  password: string
  new_password: string
  email: string
  first_name: string
  last_name: string
  country: string
  phone: string
  address_1: string
  address_2: string
  city: string
  province: string
  postal_code: string
  profile_permissions: ProfilePermissions[]
}

export interface State {
  profile: Profile
}


export const useProfileStore = defineStore({
  id: 'profile',
  state: (): State => {
    return {
      profile: {
        user: undefined as User | undefined
      } as Profile
    }
  },
  getters: {
    getProfile: (state: State): Profile => state.profile
  },

  actions: {
    setProfile(profile: { profile: Profile }) {
      this.profile = {...this.profile, ...profile}
    },
    async fetchProfile(client : any): Promise<void> {
      const user = await useSupabaseUser()

      const profile = await client.from('users').select('*').eq('id', user.value?.id).single()

      this.setProfile({...this.profile, user: user.value, ...profile.data, profile_permissions: profile.data?.profile_permissions || []})

      return
    }
  }
})
