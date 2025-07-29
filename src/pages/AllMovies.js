import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AllMovies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect( () =>{
    projectFirestore.collection("movies").get().then( (snapshot) =>{
      console.log(snapshot.docs)

      if (snapshot.empty){
        setError("No movies found")
      } else {
        let result = []
        snapshot.docs.forEach( (oneMovie) => {                              
          result.push( {id: oneMovie.id, ...oneMovie.data()} )
        })
        setData(result)        
      }
      
    }).catch ( (err) => {
      setError(err.message)
    } )

  },[])



  return <section>
    {error && <p>{error}</p>}
    {data.map( (oneMovie) => {
      const {id, title, minage, time} = oneMovie

      return <div key={id}>
        <p>{title}</p>
        <Link to={`/one-movie/${id}`}>more</Link>
      </div>
    } )}
  </section>
}

export default AllMovies