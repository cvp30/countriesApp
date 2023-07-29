import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import Menu from "./Menu"
import { CloseIcon, MenuIcon } from "../icons"

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className="flex lg:flex-col items-center justify-between lg:justify-start lg:w-1/4 lg:h-full w-full h-1/6 lg:gap-10 bg-silver py-4 px-2">
      <Link to='/' className="w-fit h-fit z-50">
        <Logo />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white z-50"
      >
        {
          isOpen ?
            <CloseIcon />
            :
            <MenuIcon />
        }
      </button>

      <div className="hidden lg:block w-full px-4">
        <Menu />
      </div>

      {
        isOpen ?
          (
            <div className={`w-full bottom-0 absolute top-0 left-0 bg-silver flex justify-center items-center px-10`}>
              <Menu />
            </div>
          )
          : <></>
      }
    </aside>
  )
}

export default Navigation