import React, { useEffect } from 'react'

import Header from 'modules/Invest/components/Header'
import InvestList from 'modules/Invest/List'
import Layout from 'components/Layout'
import { useInvestStock } from 'modules/Invest/services/hooks/useInvest'

const Invest = () => {
  const { getStock } = useInvestStock()

  useEffect(() => {
    getStock()
  }, [])

  return (
    <Layout>
      <div className="">
        <Header />
        <InvestList />
      </div>
    </Layout>
  )
}

export default Invest
