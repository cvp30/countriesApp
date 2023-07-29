import { useSearchParams } from "react-router-dom"
import { SearchIcon } from "../icons"

const SearchBar = () => {

  const [, setParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault()
    const countryName = event.target.name.value

    if (countryName.trim().length) {
      setParams({
        country: countryName
      })
    }

  }

  return (
    <header className=" w-full h-20 lg:h-1/6 py-2 lg:py-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 lg:w-2/3 h-full px-5 py-2 flex justify-between bg-white shadow-md shadow-silver rounded-full"
      >
        <div className="flex-grow flex flex-col">
          <label htmlFor="inputField" className="text-xl font-semibold">Country</label>
          <input
            id="inputField"
            name="name"
            type="text"
            className="text-xs outline-none"
            placeholder="Write the country here..."
            autoComplete="off"
          />
        </div>

        <button
          className="h-full w-fit p-3 sm:p-5 rounded-full flex justify-center items-center gap-3 bg-blue text-white"
        >
          <SearchIcon />
          <h3 className="hidden sm:block">
            Search
          </h3>
        </button>

      </form>
    </header>
  )
}

export default SearchBar