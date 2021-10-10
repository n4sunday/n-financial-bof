export enum INVEST_TYPE {
  STOCK = 'stock',
  FUND = 'fund',
  DEFI = 'defi',
  CRYPTO = 'crypto',
}

export interface InvestInterface {
  id?: string
  user_id: string
  type: INVEST_TYPE
  symbol: string
  value: number
  cost: number
}
