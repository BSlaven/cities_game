const CreateNew = () => {
  return (
    <div className="container">
      <div className="fields-container">
        <div className="input-container">
          <label htmlFor="state-field">Države</label>
          <input type="radio" name="state-field" id="state-field" />
        </div>
      </div>
    </div>
  )
}

export default CreateNew