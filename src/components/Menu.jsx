import { useState } from "react"
import { Link } from "react-router-dom"
import { CloseIcon } from "../icons"
import ContinentsContainer from "./ContinentsContainer"

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false)
  const itemClass = "w-full hover:bg-white hover:text-dark rounded-md px-4 py-2 cursor-pointer lg:text-start text-center"

  return (
    <div className="w-full text-white flex flex-col items-center justify-center lg:items-start gap-4 text-xl">
      <Link to='/' className={itemClass}>Home</Link>

      <button onClick={() => setIsOpen(true)} className={itemClass}>Continents</button>

      {
        isOpen ?
          (
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-darkBg flex justify-center items-center">
              <div className="w-11/12 lg:w-1/2 h-3/4 bg-white text-silver">

                <button onClick={() => setIsOpen(false)} className="text-blue">
                  <CloseIcon />
                </button>
                <ContinentsContainer setIsOpen={setIsOpen} />
              </div>
            </div>
          )
          :
          <></>
      }
    </div>
  )
}

export default Menu