import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const CountriesContext = createContext()

export const CountriesContextProvider = ({ children }) => {

  const [countriesArr, setCountriesArr] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  return (
    <CountriesContext.Provider value={{
      isOpen,
      setIsOpen,
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