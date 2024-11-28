import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

const CreateNew = () => {
  
  const [ selectedFields, setSelectedFields ] = useState([]);
  const [ timePerField, setTimePerField ] = useState(3);
  const [ roomId, setRoomId ] = useState('');

  const fieldCheckHanlder = e => {
    const fieldName = e.target.name;
    if(selectedFields.includes(fieldName)) {
      setSelectedFields(selectedFields.filter(field => field !== fieldName));
      return;
    }

    setSelectedFields(prevItems => [ ...prevItems, fieldName ])
  }

  const roomIdChangeHandler = e => {
    const value = e.target.value;
    setRoomId(value);
  }

  const createRoomClickHandler = () => {
    const newRoom = {
      gameDuration: timePerField * selectedFields.length,
      fields: selectedFields,
      id: uuidv4()
    }

    // TODO: add functionality to send this room to backend
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
        <h4>Vrijeme po polju</h4>
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
      <label htmlFor="room_id">Unesi ID sobe</label>
      <input
        name="room_id"
        id="room_id"
        className="room_id_input"
        type="text"
        value={roomId}
        onChange={roomIdChangeHandler}
        />
      <button 
        onClick={createRoomClickHandler}
        className="create-btn"
      >
        Kreiraj
      </button>

    </div>
  )
}

export default CreateNew