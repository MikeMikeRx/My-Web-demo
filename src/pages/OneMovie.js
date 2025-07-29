import { useParams } from "react-router-dom"

const OneMovie = () => {
  const { movieId } = useParams()
   

  return (
    <div>{ movieId }</div>
  )
}

export default OneMovie