import React from 'react'
import CardCashFlow from './components/Card/CardCashFlow'

const PersonalFinance = () => {
  return (
    <div className="border rounded-lg bg-white p-4">
      <CardCashFlow />
      <div>เงินออม (Saving outflow)</div>
      <div>รายจ่ายคงที่ (Fixed outflow)</div>
      <div>รายจ่ายแปรผัน (Variable outflow)</div>
    </div>
  )
}

export default PersonalFinance
