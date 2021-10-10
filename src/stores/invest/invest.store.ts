import create from 'zustand'
import { InvestType } from './invest.type'

export const InvestStore = create<InvestType>((set, get) => ({
  list: [],
  setList: (data) => {
    set({ list: data })
  },
}))
