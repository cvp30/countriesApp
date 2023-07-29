import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { GET_ALL_COUNTRIES } from '../graphql/queries'
import Loader from '../components/Loader';
import CountriesCards from '../components/CountriesCards';

const Home = () => {

  const [params] = useSearchParams()
  const { data, loading } = useQuery(GET_ALL_COUNTRIES)
  let countries = data?.countries

  const countryParam = params.get("country")

  if (countryParam) {
    countries = countries.filter(country => country.name.toLowerCase().includes(countryParam.toLowerCase()))
  }

  if (loading) return (
    <Loader />
  )

  return (
    <div className="w-full h-full">
      <CountriesCards
        countries={countries}
      />

    </div>
  )
}

export default Home;