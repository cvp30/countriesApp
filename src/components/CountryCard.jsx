import PropTypes from 'prop-types'
import useImage from '../hooks/useImage'

const CountryCard = ({ code, name, continent }) => {

  const image = useImage(name)

  return (
    <div
      className='w-full h-full'
    >
      <img
        alt={name}
        src={image}
        className='w-full h-2/3 object-cover rounded-t-2xl'
      />

      <div className='w-full h-1/3 flex items-center gap-3 px-2'>
        <img
          alt={code}
          src={`https://flagcdn.com/h40/${code.toLowerCase()}.webp`}
          className='h-10 w-1/4'
        />

        <div className="h-full w-3/4 flex flex-col justify-center items-start">
          <p className="w-full text-lg text-blue group-hover:text-white font-bold truncate">{name}</p>
          <p className="group-hover:text-white font-semibold">{continent}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard

CountryCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  continent: PropTypes.string,
}