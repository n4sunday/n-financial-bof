import { FINANCE_TYPE } from './enum'

export interface FinanceCashFlowInterface {
  id?: string
  user_id?: string
  type: FINANCE_TYPE
  year: number
  mon: number
  salary: number
  freelance: number
  dividend: number
  interest: number
  profit: number
  other: number
}
