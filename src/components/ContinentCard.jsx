import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import useImage from "../hooks/useImage"

const ContinentCard = ({ code, name, setIsOpen }) => {

  const image = useImage(name)

  return (
    <Link
      to={`/continent/${code}`}
      onClick={() => setIsOpen(false)}
      className="h-36 w-36 group flex flex-col"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-5/6 rounded-xl group-hover:shadow-md group-hover:shadow-blue"
      />

      <p className="font-semibold">{name}</p>
    </Link>
  )
}

export default ContinentCard

ContinentCard.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  setIsOpen: PropTypes.any,
}