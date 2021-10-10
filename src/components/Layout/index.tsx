import React from 'react'
import Menu from '../Menu'

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  return (
    <div className="w-screen h-screen flex bg-[#f8f9fd]">
      <Menu />
      <div className="h-screen w-full overflow-y-auto bg-[#f8f9fd] px-10 py-10 flex flex-col">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
