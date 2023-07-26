import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
// import { useQuery } from "@apollo/client";
// import { GET_ALL_COUNTRIES } from "../graphql";


const CountriesContext = createContext()

export const CountriesContextProvider = ({ children }) => {

  const [countriesArr, setCountriesArr] = useState([])

  return (
    <CountriesContext.Provider value={{
      countriesArr,
      setCountriesArr
    }}>
      {children}
    </CountriesContext.Provider>
  )
}

export const CountriesData = () => {
  return useContext(CountriesContext)
}

CountriesContextProvider.propTypes = {
  children: PropTypes.any
}