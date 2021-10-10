import { FinanceCashFlowAction } from 'actions/finance.action'
import { FINANCE_TYPE } from 'interfaces/enum'
import { FinanceCashFlowInterface } from 'interfaces/finance.interface'
import { useMemo } from 'react'
import { FinanceStore, ProfileStore } from 'stores'
import { getYear } from '../utils'

export const useCashFlowFinance = () => {
  const { cashFlow, setCashFlow } = FinanceStore()
  const { user } = ProfileStore()

  const fetchData = async () => {
    if (user) {
      let res = await FinanceCashFlowAction.get(user?.id)
      initialData(res)
      if (res) {
        setCashFlow(res)
      }
    }
  }

  const initialData = async (data: FinanceCashFlowInterface[]) => {
    if (!user) return
    if (data.length) return

    let mon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let promises = [] as any[]
    for (const item of mon) {
      promises.push(
        FinanceCashFlowAction.create({
          user_id: user?.id,
          type: FINANCE_TYPE.CASH_FLOW,
          year: getYear(),
          mon: item,
          salary: 0,
          freelance: 0,
          dividend: 0,
          interest: 0,
          profit: 0,
          other: 0,
        })
      )
    }
    let result = await Promise.all(promises)
    setCashFlow(result)
  }

  const data = useMemo(() => {
    return cashFlow.sort((a, b) => (a.mon < b.mon ? -1 : 1)).slice(0, 6)
  }, [cashFlow])

  const header = useMemo(() => {
    return {
      salary: 0,
      freelance: 0,
      dividend: 0,
      interest: 0,
      profit: 0,
      other: 0,
    }
  }, [cashFlow])

  return { data, header, fetchData }
}

export default useCashFlowFinance
