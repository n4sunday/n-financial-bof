import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { FinanceCashFlowInterface } from 'interfaces/finance.interface'
import { useCashFlowFinance } from 'modules/Finance/services/hooks'
import { formatCurrency } from 'modules/Finance/services/utils'
import { Button } from 'antd'

const Item = styled.div`
  ${tw`border-b py-1 last:border-none flex justify-between items-center`}
`

const ButtonEdit = styled.div`
  ${tw`text-xs cursor-pointer text-gray-400`}
`

const Tags = styled.div`
  ${tw`text-green-300 font-semibold`}
`

const CardCashFlow = () => {
  const { data, header } = useCashFlowFinance()

  console.log('data', data)

  return (
    <React.Fragment>
      <div className="text-lg font-semibold mb-2">รายรับ (Cash Flow)</div>
      <div className="mb-3 grid grid-cols-8 gap-4">
        <div className="border border-gray-200 px-3 py-2 rounded-xl col-span-2">
          <Item>
            เงินเดือน
            <Tags>{header.salary}</Tags>
          </Item>
          <Item>
            งานนอก
            <Tags>{header.salary}</Tags>
          </Item>
          <Item>
            ดอกเบี้ย
            <Tags>{header.salary}</Tags>
          </Item>
          <Item>
            ปันผล
            <Tags>{header.salary}</Tags>
          </Item>
          <Item>
            กำไรจากการลงทุน
            <Tags>{header.salary}</Tags>
          </Item>
          <Item className="last:border-none">
            อื่น ๆ<Tags>{header.salary}</Tags>
          </Item>
        </div>
        {data?.map((item) => (
          <div className="border border-gray-200 px-3 py-2 rounded-xl">
            <Item>
              {formatCurrency(item?.salary)}
              <ButtonEdit>Edit</ButtonEdit>
            </Item>
            <Item>
              {formatCurrency(item?.freelance)}
              <ButtonEdit>Edit</ButtonEdit>
            </Item>
            <Item>
              {formatCurrency(item?.interest)}
              <ButtonEdit>Edit</ButtonEdit>
            </Item>
            <Item>
              {formatCurrency(item?.dividend)}
              <ButtonEdit>Edit</ButtonEdit>
            </Item>
            <Item>
              {formatCurrency(item?.profit)}
              <ButtonEdit>Edit</ButtonEdit>
            </Item>
            <Item>
              {formatCurrency(item?.other)}
              <ButtonEdit>Edit</ButtonEdit>
            </Item>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default CardCashFlow
