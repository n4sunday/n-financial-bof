import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import Header from '../../modules/Finance/Header'
import PersonalFinance from 'modules/Finance/PersonalFinance'
import { useCashFlowFinance } from 'modules/Finance/services/hooks'

const Finance = () => {
  const { fetchData } = useCashFlowFinance()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <div className="">
        <Header />
      </div>
      <PersonalFinance />
    </Layout>
  )
}

export default Finance
