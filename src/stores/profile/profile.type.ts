import { IProfile } from '../../interfaces'

export type ProfileType = {
  user: IProfile | null
  setUser: (data: IProfile) => void
}
