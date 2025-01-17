import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

type Props = {
}

const Navbar = (props: Props) => {

    const flexBetween = "flex justify-between items-center"

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
        {/* LEFT SIDE */}

        <img src="./assets/Logo.png" alt="" />
        {/* RIGHT SIDE */}
        <div className={`${flexBetween} w-full`}>

        </div>

        </div>

      </div>
    
    </nav>
  )
}

export default Navbar
