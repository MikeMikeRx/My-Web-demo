import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [movieAge, setMovieAge] = useState(null)
  const [movieTime, setMovieTime] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault()

    const newMovie = {
      title: movieTitle, 
      minage: movieAge, 
      time: movieTime
    }

    try {
      await projectFirestore.collection("movies").add(newMovie)
      setMovieTitle("")
      setMovieAge(null)
      setMovieTime(null)
    } catch (err) {
      console.log(err.message)      
    }

  }

  return <section>
    <form onSubmit={submitForm}>
      <input 
      type="text" 
      placeholder="Movie Name"
      onChange={ (e) => setMovieTitle(e.target.value) }
      value={movieTitle}
      />

      <input type="number"
      placeholder="Minimal age"
      min="1"
      onChange={ (e) => setMovieAge(e.target.value) }
      value={movieAge}       
      />

      <input type="number"
      placeholder="Movie duration"
      min="1"
      onChange={ (e) => setMovieTime(e.target.value) }
      value={movieTime}      
      />

      <input type="submit"
      value="Add movie" 
      />

    </form>

  </section>
}

export default Form