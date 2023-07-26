import PropTypes from "prop-types"
import useImage from "../hooks/useImage"
import { useLazyQuery } from "@apollo/client"
import { FILTER_BY_CONTINENT } from "../graphql"
import { useEffect } from "react"
import { CountriesData } from "../context/CountriesContext"

const ContinentCard = ({ name, code, setActive }) => {

  const image = useImage(name)
  const { setCountriesArr } = CountriesData()
  const [getCountries, result] = useLazyQuery(FILTER_BY_CONTINENT)

  const filterCountries = () => {
    getCountries({
      variables: {
        code
      }
    })
  }

  useEffect(() => {
    if (result.data) {
      setCountriesArr(result.data.continent.countries)
      setActive(false)
    }
  }, [result])


  return (
    <div
      onClick={() => filterCountries()}
      className="h-36 w-36 cursor-pointer group"
    >
      <img src={image} alt={image} className="w-full h-5/6 rounded-xl group-hover:shadow-md group-hover:shadow-blue" />

      <p className="font-semibold">{name}</p>
    </div>
  )
}

ContinentCard.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  setActive: PropTypes.any
}
export default ContinentCard