import axios from "axios"
import { useEffect, useState } from "react"

const useImage = (name) => {
  const [image, setImage] = useState(localStorage.getItem(name))

  const KEY = import.meta.env.VITE_KEY
  console.log(KEY)

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