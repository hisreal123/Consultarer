import React from 'react'

export const MobileMenuToggle = () => {
  return (
    <div>  <MdMenu
    className="text-3xl text-gray-600 mr-1 md:hidden"
    onClick={() => setOpenSideBar(!openSideBar)}
  /></div>
  )
}
