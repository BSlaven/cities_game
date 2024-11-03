import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {

  const navigate = useNavigate();

  const [ roomId, setRoomId ] = useState('');

  const roomIdChangeHandler = e => {
    const roomValue = e.target.value;
    setRoomId(roomValue);
  }

  const submitRoomIdHandler = e => {

    if(roomId.length === 0) {
      console.log('moraš unijeti id sobe.');
      return;
    };
    
    navigate(`/room/${roomId}`);
  }
  
  return (
    <div className="container">
      <label htmlFor="room">Enter room number</label>
      <input 
        type="text"
        id="room"
        name="room" 
        placeholder="Room number"
        className="room_id_input"
        onChange={roomIdChangeHandler}
        value={roomId}
      />
      <button 
        onClick={submitRoomIdHandler}
        className="room_id_btn"
      >
        confirm
      </button>
    </div>
  )
}

export default JoinRoom