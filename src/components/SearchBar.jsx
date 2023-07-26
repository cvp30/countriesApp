import { useQuery } from "@apollo/client"
import { GET_ALL_COUNTRIES } from "../graphql"
import { SearchIcon } from "../icons"
import { CountriesData } from "../context/CountriesContext"

const SearchBar = () => {

  const { data, loading } = useQuery(GET_ALL_COUNTRIES)
  const { setCountriesArr } = CountriesData()

  const handleSubmit = (event) => {
    event.preventDefault()
    const countryName = event.target.name.value

    if (!loading && data) {
      const countriesFiltered = data.countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))
      setCountriesArr(countriesFiltered)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[34rem] h-16 bg-white box-border mx-auto px-5 py-2 flex justify-between rounded-full shadow-md shadow-silver  sticky top-2"
    >
      <div className="flex flex-col grow">
        <h3 className="text-silver font-semibold">País</h3>
        <input
          type="text"
          name="name"
          placeholder="Escribe el pais que deseas ver"
          className="w-1/2 text-sm text-silver outline-none"
          autoComplete="off"
        />
      </div>

      <button className="h-full w-44 border rounded-full flex justify-center items-center gap-3 bg-blue text-white text-xl">
        <SearchIcon />
        Buscar
      </button>


    </form>
  )
}

export default SearchBar