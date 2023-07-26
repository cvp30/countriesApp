import axios from "axios"
import { useEffect, useState } from "react"

const useImage = (name) => {
  const [image, setImage] = useState(localStorage.getItem(name))

  const KEY = "38480511-9195bf9dd874b53ecbde34d98"

  useEffect(() => {
    if (!image) {
      axios.get(`https://pixabay.com/api/?key=${KEY}&q=${name}&image_type=photo`)
        .then(res => {
          setImage(res.data.hits[0].webformatURL)
          localStorage.setItem(name, res.data.hits[0].webformatURL)
        })
    }
  }, [image, name])

  return image
}

export default useImage