import { useQuery } from "@apollo/client"
import { GET_ALL_CONTINENTS } from "../graphql/queries"
import Loader from "./Loader"
import ContinentCard from "./ContinentCard"
import PropTypes from "prop-types"


const ContinentsContainer = ({ setIsOpen }) => {

  const { data, loading } = useQuery(GET_ALL_CONTINENTS)

  if (loading) return <Loader />

  return (
    <div className="w-full h-fit flex flex-col items-center gap-2 ">
      <header className="w-full flex justify-center items-center">
        <h2 className="font-semibold">Filter by Continents</h2>
      </header>

      <main className="w-full h-80 flex flex-wrap justify-center items-center gap-10 overflow-y-auto">
        {
          data.continents.map(continent => {
            return (
              <ContinentCard
                key={continent.name}
                code={continent.code}
                name={continent.name}
                setIsOpen={setIsOpen}
              />
            )
          })
        }
      </main>


    </div>
  )
}

export default ContinentsContainer

ContinentsContainer.propTypes = {
  setIsOpen: PropTypes.any,
}