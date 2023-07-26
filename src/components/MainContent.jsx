import { useQuery } from "@apollo/client"
import SearchBar from "./SearchBar"
import { GET_ALL_COUNTRIES } from "../graphql"
import CountryCard from "./CountryCard"
import CountryDetail from "./CountryDetail"
import { useEffect, useState } from "react"
import { CloseIcon } from "../icons"
import { CountriesData } from "../context/CountriesContext"

const MainContent = () => {

  const [countryCode, setCountryCode] = useState("")
  const { data, loading } = useQuery(GET_ALL_COUNTRIES)
  const { isOpen, setIsOpen, countriesArr, setCountriesArr } = CountriesData()


  const handleDetail = (code) => {
    if (!isOpen) setIsOpen(true)
    setCountryCode(code)
  }

  useEffect(() => {
    if (!loading && data) setCountriesArr(data?.countries)
  }, [loading, data, setCountriesArr])

  return (
    <div className="w-4/5 bg-sky pt-2 flex flex-col gap-4">
      <SearchBar />

      <main className="w-full h-fit flex gap-3">

        {
          loading ?
            <h1>LOADING</h1>
            :
            (
              <div className={`${isOpen ? 'w-2/3' : 'w-full'} px-2 flex justify-start items-stretch gap-x-3 gap-y-8 flex-wrap transition-all ease-in-out duration-300 overflow-y-auto`}>
                {
                  countriesArr?.map(country => {
                    return (
                      <article
                        key={country.code}
                        className="h-40 w-64"
                        onClick={() => handleDetail(country.code)}
                      >
                        <CountryCard
                          code={country.code}
                          name={country.name}
                          continent={country.continent.name}
                        />
                      </article>
                    )
                  })
                }
              </div>
            )
        }

        {
          isOpen ?
            (
              <div className="w-1/3 h-screen sticky top-[5.5rem]">
                <CountryDetail
                  code={countryCode}
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-fit h-fit  absolute top-0 left-0">
                  <CloseIcon />
                </button>
              </div>
            )
            :
            ''
        }


      </main>

    </div>
  )
}

export default MainContent