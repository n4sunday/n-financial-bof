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

  console.log('location', location)

  return (
    <React.Fragment>
      <div className="bg-[#f1f1f1] min-w-[250px] m-3 flex flex-col items-center select-none">
        <div className="mt-6 text-[30px] font-semibold">N-FINANCIAL</div>
        <div className="mt-6 flex flex-col w-full">
          <Link to="/">
            <MenuItem name="Home" active={location?.pathname === '/'}>
              <HomeIcon className="h-6 w-6 mr-4" />
            </MenuItem>
          </Link>
          <Link to="/finance">
            <MenuItem name="Finance" active={location?.pathname === '/finance'}>
              <CurrencyDollarIcon className="h-6 w-6 mr-4" />
            </MenuItem>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Menu
