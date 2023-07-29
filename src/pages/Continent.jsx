import { useQuery } from "@apollo/client"
import { useParams, useSearchParams } from "react-router-dom"
import { FILTER_BY_CONTINENT } from "../graphql/queries"
import Loader from "../components/Loader"
import CountriesCards from "../components/CountriesCards"


const Continent = () => {
  const { code } = useParams()
  const [params] = useSearchParams()

  const { data, loading } = useQuery(FILTER_BY_CONTINENT, {
    variables: {
      code
    },
  })
  let countries = data?.continent?.countries

  const countryParam = params.get("country")
  if (countryParam) {
    countries = countries.filter(country => country.name.toLowerCase().includes(countryParam.toLowerCase()))
  }

  if (loading) return <Loader />

  return (
    <div className="w-full h-full">
      <CountriesCards
        countries={countries}
      />
    </div>
  )
}

export default Continent