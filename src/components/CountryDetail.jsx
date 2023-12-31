import { useQuery } from "@apollo/client"
import { GET_COUNTRY_DETAIL } from "../graphql/queries"
import PropTypes from 'prop-types';
import Loader from "./Loader";
import { useEffect, useState } from "react";

const CountryDetail = ({ code }) => {

  const { data, loading } = useQuery(GET_COUNTRY_DETAIL, {
    variables: {
      code
    },
  })

  const [image, setImage] = useState("")

  const subtitle = "text-lg text-blue font-bold"
  const content = "text-silver font-semibold pl-3"

  useEffect(() => {
    if (!loading && data) {
      setImage(localStorage.getItem(data.country.name))
    }
  }, [loading, data])

  if (loading) return <Loader />

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-1 px-8 pt-0">
      <img
        src={image}
        alt="img"
        className='h-48 w-full rounded-xl'
      />

      <div className="h-fit w-full flex gap-3">
        <picture className="h-full w-16 flex justify-center items-center">
          <img
            src={`https://flagcdn.com/h40/${code.toLowerCase()}.webp`}
            alt={code}
            className="h-12 w-16"
          />
        </picture>

        <div className="h-full glex-grow flex flex-col justify-center items-start">
          <p className="w-full text-lg text-blue group-hover:text-white font-bold truncate">
            {data.country.name}
          </p>
          <p className="font-semibold text-silver group-hover:text-white">{data.country.continent.name}</p>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <p className={subtitle}>
          Capital:
          <span className={content}>{data.country.capital}</span>
        </p>
        <p className={subtitle}>
          Language:
          <span className={content}>{data.country.languages.map(lang => lang.name).join(', ')}</span>
        </p>
        <p className={subtitle}>
          Currency:
          <span className={content}>{data.country.currencies.join(', ')}</span>
        </p>
        <p className={subtitle}>
          States:
        </p>
        <div className='flex flex-col gap-2 p-2 w-[90%] h-24 overflow-y-auto shadow-md shadow-silver'>
          {
            data.country.states.length ?
              (
                data.country.states.map(state => {
                  return (
                    <p
                      key={state}
                      className=' text-sm'
                    >
                      {state.name}
                    </p>
                  )
                })
              )
              :
              <p className="text-sm font-semibold">No states</p>
          }
        </div>
      </div>


    </div>
  )
}

export default CountryDetail

CountryDetail.propTypes = {
  code: PropTypes.string,
}