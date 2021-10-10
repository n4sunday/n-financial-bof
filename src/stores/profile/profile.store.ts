import create from 'zustand'
import { errorMessage } from '../../components/Message'
import { IProfile } from '../../interfaces'
import { AuthService } from '../../services'
import { ProfileType } from './profile.type'

export const ProfileStore = create<ProfileType>((set, get) => ({
  user: null,
  setUser: (user: IProfile) => {
    set({ user })
  },
}))
