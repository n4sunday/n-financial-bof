import create from 'zustand'
import { FinanceType } from './finance.type'

export const FinanceStore = create<FinanceType>((set, get) => ({
  cashFlow: [],
  setCashFlow: (data) => set({ cashFlow: data }),
}))
