import { useQuery } from "@apollo/client"
import { CloseIcon } from "../icons"
import { GET_ALL_CONTINENTS } from "../graphql"
import ContinentCard from "./ContinentCard"
import PropTypes from "prop-types"

const Continents = ({ setActive }) => {

  const { data, loading } = useQuery(GET_ALL_CONTINENTS)

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <div className="w-3/5 h-3/4 rounded-3xl bg-white p-5 shadow-sm shadow-sidebar">
        <header className=" w-full h-[8%] flex justify-between items-center">
          <p>Filter by Continents</p>
          <button onClick={() => setActive(false)}>
            <CloseIcon />
          </button>
        </header>

        <main className="w-full h-[92%] flex flex-wrap justify-start items-center gap-x-8 gap-y-4 overflow-y-auto">
          {
            loading ?
              <h1>LOADING</h1>
              :
              (
                data.continents.map(continent => {
                  return (
                    <ContinentCard
                      key={continent.name}
                      code={continent.code}
                      name={continent.name}
                      setActive={setActive}
                    />
                  )
                })
              )
          }
        </main>


      </div>
    </div>
  )
}

Continents.propTypes = {
  setActive: PropTypes.any,
}

export default Continents