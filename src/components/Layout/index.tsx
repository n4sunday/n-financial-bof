import React from 'react'
import Menu from '../Menu'

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  return (
    <div className="w-scrren h-screen flex bg-app-light">
      <Menu />
      <div className="h-scrren w-full overflow-y-auto bg-background px-10 py-10 flex flex-col">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
