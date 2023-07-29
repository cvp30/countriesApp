import { useState } from "react"
import CountryCard from "./CountryCard"
import PropTypes from 'prop-types'
import CountryDetail from "./CountryDetail"
import { CloseIcon } from "../icons"

const CountriesCards = ({ countries }) => {

  const [isOpen, setIsOpen] = useState(false)

  const [code, setCode] = useState("")

  const handleDetail = (code) => {
    setIsOpen(true)
    setCode(code)
  }

  return (
    <div className="w-full h-full pl-2 flex overflow-y-auto">

      <div className={`${isOpen ? 'lg:w-2/3' : 'w-full'} flex flex-wrap justify-center gap-x-20 gap-y-5 transition-all ease-in-out duration-1000`}>
        {
          countries.map(country =>
            <article
              key={country.code}
              onClick={() => handleDetail(country.code)}
              className="w-64 h-40 bg-white rounded-2xl shadow-md group hover:bg-blue shadow-silver cursor-pointer group"
            >
              <CountryCard
                setIsOpen={setIsOpen}
                code={country.code}
                name={country.name}
                continent={country.continent.name}
              />
            </article>
          )
        }
      </div>


      {
        isOpen ?
          (
            <>
              <div className='w-1/3 hidden lg:block h-full sticky top-0 bg-white transition-all ease-in-out duration-1000'>
                <button
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </button>
                <CountryDetail code={code} />
              </div>

              <div className="lg:hidden absolute top-0 left-0 bottom-0 right-0 bg-darkBg flex justify-center items-center transition-all ease-in-out duration-1000 z-50">
                <div className="w-80 h-screen bg-white flex flex-col">
                  <button
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                  <CountryDetail code={code} />
                </div>

              </div>
            </>
          )
          :
          <></>
      }




    </div>
  )
}

export default CountriesCards

CountriesCards.propTypes = {
  countries: PropTypes.array,
}