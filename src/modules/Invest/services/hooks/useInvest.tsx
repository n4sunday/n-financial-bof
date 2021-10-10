import { InvestAction } from 'actions/invest.action'
import { INVEST_TYPE } from 'interfaces/invest.interface'
import { useMemo } from 'react'
import { InvestStore } from 'stores'

export const useInvestStock = () => {
  const { list, setList } = InvestStore()

  const getStock = async () => {
    try {
      let res = await InvestAction.get('res')
      if (res) {
        setList(res)
      }
      console.log('res', res)
    } catch (err) {}
  }

  const onCreatInvest = async () => {
    try {
      let res = await InvestAction.create({
        user_id: 'string',
        type: INVEST_TYPE.STOCK,
        symbol: 'TISCO',
        value: 92,
        cost: 82,
      })
      console.log('res', res)
    } catch (err) {}
  }

  const listStock = useMemo(() => {
    return list
  }, [list])

  const countStock = useMemo(() => {
    return list.filter((i) => i.type === INVEST_TYPE.STOCK).length
  }, [list])

  const valueStock = useMemo(() => {
    return list.filter((i) => i.type === INVEST_TYPE.STOCK).length
  }, [list])

  return { onCreatInvest, getStock, listStock, countStock, valueStock }
}
