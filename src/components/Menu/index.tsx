import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, CurrencyDollarIcon } from '@heroicons/react/outline'
import { Space } from 'antd'
import MenuItem from './MenuItem'

const Menu = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  console.log("location",location);
  

  return (
    <React.Fragment>
      <Space className="bg-white min-w-[90px] flex flex-col justify-center items-center select-none ml-8 my-10 rounded-3xl">
        <Link to="/">
          <MenuItem active={location?.pathname === '/'}>
            <HomeIcon className="h-6 w-6" />
          </MenuItem>
        </Link>
        <Link to="/finance">
          <MenuItem active={location?.pathname === '/finance'}>
            <CurrencyDollarIcon className="h-6 w-6" />
          </MenuItem>
        </Link>
      </Space>
    </React.Fragment>
  )
}

export default Menu
