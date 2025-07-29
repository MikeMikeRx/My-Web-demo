const Form = () => {
  return <section>
    <form>
      <input 
      type="text" 
      placeholder="Title"
      />

      <input type="number"
      placeholder="Minimal age"
      min="1"       
      />

      <input type="number"
      placeholder="Movie duration"
      min="1"
      />

      <input type="submit"
      value="Add movie" 
      />
      
    </form>

  </section>
}

export default Form