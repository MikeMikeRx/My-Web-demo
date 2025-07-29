import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [movieAge, setMovieAge] = useState(null)
  const [movieTime, setMovieTime] = useState(null)

  const submitForm = (e) => {
    e.preventDefault()

    console.log(movieTitle)
    console.log(movieAge)
    console.log(movieTime)

  }

  return <section>
    <form onSubmit={submitForm}>
      <input 
      type="text" 
      placeholder="Title"
      onChange={ (e) => setMovieTitle(e.target.value) }
      />

      <input type="number"
      placeholder="Minimal age"
      min="1"
      onChange={ (e) => setMovieAge(e.target.value) }       
      />

      <input type="number"
      placeholder="Movie duration"
      onChange={ (e) => setMovieTime(e.target.value) }
      min="1"
      />

      <input type="submit"
      value="Add movie" 
      />

    </form>

  </section>
}

export default Form