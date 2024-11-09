const CreateNew = () => {
  return (
    <div className="container">
      <div className="fields-container">
        <h4 className="fields-title">Opcije</h4>
        <div className="input-container">
          <label htmlFor="state-field">Države</label>
          <input type="radio" name="state-field" id="state-field" />
        </div>
        <div className="input-container">
          <label htmlFor="cities-field">Gradovi</label>
          <input type="radio" name="cities-field" id="cities-field" />
        </div>
        <div className="input-container">
          <label htmlFor="rivers-field">Rijeke</label>
          <input type="radio" name="rivers-field" id="rivers-field" />
        </div>
        <div className="input-container">
          <label htmlFor="mountains-field">Planine</label>
          <input type="radio" name="mountains-field" id="mountains-field" />
        </div>
        <div className="input-container">
          <label htmlFor="names-field">Imena</label>
          <input type="radio" name="names-field" id="names-field" />
        </div>
        <div className="input-container">
          <label htmlFor="vegefruit-field">Voće i povrće</label>
          <input type="radio" name="vegefruit-field" id="vegefruit-field" />
        </div>
        <div className="input-container">
          <label htmlFor="animals-field">Životinje</label>
          <input type="radio" name="animals-field" id="animals-field" />
        </div>
      </div>
      <div className="time-options-container">
        <h4>Vrijeme po partiji</h4>
        <select name="time" id="time" className="time-selection">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  )
}

export default CreateNew