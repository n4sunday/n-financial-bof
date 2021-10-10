import { FinanceCashFlowInterface } from 'interfaces/finance.interface'

export type FinanceType = {
  cashFlow: FinanceCashFlowInterface[]
  setCashFlow: (data: FinanceCashFlowInterface[]) => void
}
