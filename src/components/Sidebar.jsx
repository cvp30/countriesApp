import { useQuery } from '@apollo/client'
import Logo from './Logo'
import { GET_ALL_COUNTRIES } from '../graphql'
import { CountriesData } from '../context/CountriesContext'
import { useState } from 'react'
import Continents from './Continents'

const Sidebar = () => {
  const [active, setActive] = useState(false)
  const itemClass = "text-white hover:bg-white hover:text-dark capitalize rounded-md px-4 py-2 cursor-pointer "

  const { data } = useQuery(GET_ALL_COUNTRIES, {
    fetchPolicy: 'cache-and-network'
  })
  const { setCountriesArr } = CountriesData()

  const handleHome = () => {
    setCountriesArr(data.countries)
  }


  return (
    <aside
      className="w-full md:w-1/5 h-screen bg-sidebar flex flex-col items-center gap-6 pt-2 px-7 sticky top-0"
    >
      <Logo />

      <div className="w-full flex flex-col gap-2 ">
        <button onClick={handleHome} className={itemClass}>
          <h2 className='text-start'>Home</h2>
        </button>

        <button onClick={() => setActive(true)} className={itemClass}>
          <h2 className='text-start'>Continents</h2>
        </button>

        {
          active ?
            <Continents setActive={setActive} /> : ''
        }



      </div>

    </aside>
  )
}

export default Sidebar