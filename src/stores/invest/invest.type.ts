import { InvestInterface } from '../../interfaces/invest.interface'

export type InvestType = {
  list: InvestInterface[]
  setList: (data: InvestInterface[]) => void
}
