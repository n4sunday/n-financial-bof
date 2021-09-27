import React from 'react'

interface IProps {
  children?: React.ReactNode
  active?: boolean
  name?: string
}

const MenuItem = (props: IProps) => {
  return (
    <div
      className={`flex items-center text-black px-5 py-4 border-l-2 ${
        props?.active ? 'border-black' : 'border-[#f1f1f1]'
      }`}
    >
      {props?.children}
      <span className="text-[16px] font-semibold">{props?.name}</span>
    </div>
  )
}

export default MenuItem
