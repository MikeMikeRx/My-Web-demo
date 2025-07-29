import "./OneMovie.css"
import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect} from "react"

const OneMovie = () => {
  const [data,setData] = useState({})
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
  }, [movieId])
 
   

  return (    
    <section className="one-movie-section">
      {error && <p>{error}</p>}
      <h1>{data.title}</h1>      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, distinctio blanditiis reiciendis fugiat sed omnis minus animi voluptate earum numquam magnam, aspernatur enim at nesciunt asperiores fuga ut ipsum officiis.</p>
      <p>{data.time} min </p>
      <p>{data.minage} + </p>

    </section>
  )
}

export default OneMovie