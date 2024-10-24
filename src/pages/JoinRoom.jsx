import { useState } from "react"

const JoinRoom = () => {

  const [ roomId, setRoomId ] = useState('');

  const roomIdChangeHandler = e => {
    const roomValue = e.target.value;
    setRoomId(roomValue);
  }

  const submitRoomIdHandler = e => {

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
      <button className="room_id_btn">Confirm</button>
    </div>
  )
}

export default JoinRoom