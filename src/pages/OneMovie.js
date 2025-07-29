import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect} from "react"

const OneMovie = () => {
  const [data,setData] = useState([])
  const [error, setError] = useState(false)

  const { movieId } = useParams()

  useEffect( () => {
    projectFirestore.collection("movies").doc(movieId).get().then( (document) => 
      {
        if(document.exists) {
          setData(document.data())
          
        } else {
          setError("Movie not found")
        }
        
      }).catch( (err) => {
        setError(err.message) 
      })
  },[])
 
   

  return (
    <div>{ movieId }</div>
  )
}

export default OneMovie