import { useState, useEffect } from "react";

const CreateNew = () => {
  
  const [ selectedFields, setSelectedFields ] = useState([]);

  useEffect(() => {
    console.log(selectedFields);
  }, [selectedFields]);

  const fieldCheckHanlder = e => {
    const fieldName = e.target.name;
    if(selectedFields.includes(fieldName)) {
      console.log('ima ga')
      setSelectedFields(selectedFields.filter(field => field !== fieldName));
      return;
    }

    setSelectedFields(prevItems => [ ...prevItems, fieldName ])
  }
  
  return (
    <div className="container">
      <div className="fields-container">
        <h4 className="fields-title">Opcije</h4>
        <div className="input-container">
          <label htmlFor="state-field">Države</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="state-field" id="state-field" />
        </div>
        <div className="input-container">
          <label htmlFor="cities-field">Gradovi</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="cities-field" id="cities-field" />
        </div>
        <div className="input-container">
          <label htmlFor="rivers-field">Rijeke</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="rivers-field" id="rivers-field" />
        </div>
        <div className="input-container">
          <label htmlFor="mountains-field">Planine</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="mountains-field" id="mountains-field" />
        </div>
        <div className="input-container">
          <label htmlFor="names-field">Imena</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="names-field" id="names-field" />
        </div>
        <div className="input-container">
          <label htmlFor="vegefruit-field">Voće i povrće</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="vegefruit-field" id="vegefruit-field" />
        </div>
        <div className="input-container">
          <label htmlFor="animals-field">Životinje</label>
          <input onChange={fieldCheckHanlder} type="checkbox" name="animals-field" id="animals-field" />
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