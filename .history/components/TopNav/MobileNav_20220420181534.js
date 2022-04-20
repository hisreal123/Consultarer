import React from 'react'

const MobileNav = () => {
  return (
      {/* Adding pr-2 to make space for te search component*/}
      <div className="mobile relative pl-1 px-2">
      <div className=" relative flex justify-between items-center bg-white w-screen ">
        <div className=" relative flex items-center">
          {/* menu avialable only for mobile xs & sm screen size*/}
          <MdMenuOpen
            className="text-3xl text-gray-600 mr-1 md:hidden"
            onClick={() => setOpen(!Open)}
          />
          <Logo className="text-9xl h-10 w-20 md:w-36  " />
        </div>

        {/* profile avialable only for mobile xs & sm screen size*/}
        <div className="absolute right-0 pr-2">
          <Profile className="text-3xl " />
          <span className="bg-green-600 h-2 w-2 absolute z-10 bottom-1 right-2  rounded-full "></span>
        </div>
      </div>
      {/* Search avialable only for mobile xs & sm screen size*/}
      <Search
        widthStyle="w-full hover:text-green-400 "
        mobileStyle="mb-3 outline-none rounded-full border border-1 "
        inputStyle=" text-xs py-1 px-2 w-full"
      />
    </div>
  )
}

export default MobileNav