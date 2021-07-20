import React from 'react'

interface IProps {
  children: React.ReactNode
  active?: boolean
}

const MenuItem = (props: IProps) => {
  return (
    <div className={`cursor-pointer w-12 h-12 ${props?.active ? 'bg-menu-active text-menu-active-icon':'bg-menu-normal text-menu-normal-icon'} hover:bg-menu-active hover:text-menu-active-icon flex items-center justify-center rounded-full`}>
      {props?.children}
    </div>
  )
}

export default MenuItem
