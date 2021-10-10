import React from 'react'
import { Button } from 'antd'

import { useInvestStock } from 'modules/Invest/services/hooks/useInvest'
import { computeValue } from './services/utils'

const InvestList = () => {
  const { listStock, onCreatInvest, countStock, valueStock } = useInvestStock()

  return (
    <div className="flex flex-col bg-white shadow-sm p-5">
      <div className="font-semibold text-[16px] mb-4 flex justify-between">
        <div>Your Stock {countStock}</div>
        <div>Total {valueStock} Baht</div>
      </div>
      <div>
        {listStock?.map((item) => (
          <div className="flex">
            <div>{item?.symbol}</div>
            <div>{item?.cost}</div>
            <div>{item?.value}</div>
            <div className="px-6">{computeValue(item?.value, item?.cost)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvestList
