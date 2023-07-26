import PropTypes from "prop-types"

const CountryCard = ({ code, name, continent }) => {

  const image = "https://www.quieroviajarsola.com/wp-content/uploads/2022/10/Viajar-sola-a-Paris-Torre-Eiffel-de-noche.webp"

  return (
    <div
      // onClick={() => handleClick(code, image)}
      className="h-full w-full bg-white rounded-2xl shadow-md group hover:bg-blue shadow-silver cursor-pointer"
    >
      <div className="w-full h-2/3">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-t-2xl object-cover"
        />
      </div>

      <div className="h-1/3 w-full flex gap-2 px-2">
        <picture className="h-full w-1/4 flex justify-center items-center">
          <img
            src={`https://flagcdn.com/h40/${code.toLowerCase()}.webp`}
            alt={code}
            className="h-10 w-16"
          />
        </picture>

        <div className="h-full w-3/4 flex flex-col justify-center items-start">
          <p className="w-full text-lg text-blue group-hover:text-white font-bold truncate">{name}</p>
          <p className="text-silver group-hover:text-white font-semibold">{continent}</p>
        </div>
      </div>
    </div>
  )
}

CountryCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  continent: PropTypes.string,
}

export default CountryCard