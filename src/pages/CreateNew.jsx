import { useState } from "react";

const CreateNew = () => {
  
  const [ selectedFields, setSelectedFields ] = useState([]);
  const [ timePerField, setTimePerField ] = useState(3);

  const fieldCheckHanlder = e => {
    const fieldName = e.target.name;
    if(selectedFields.includes(fieldName)) {
      setSelectedFields(selectedFields.filter(field => field !== fieldName));
      return;
    }

    setSelectedFields(prevItems => [ ...prevItems, fieldName ])
  }
  
  return (
    <div className="container">
      <div className="fields-container">
        <h4 className="fields-title">Odaberite polja</h4>
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
        <div className="time-btn-container">
          <button 
            onClick={() => setTimePerField(3)}
            className="time-btn"
          >
            3 sekunde
          </button>
          <button 
            onClick={() => setTimePerField(5)}
            className="time-btn"
          >
            5 sekundi
          </button>
          <button 
            onClick={() => setTimePerField(7)}
            className="time-btn"
          >
            7 sekundi
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateNew