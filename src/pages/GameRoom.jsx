import { useParams } from "react-router-dom";

const GameRoom = () => {

  const { id } = useParams();
  
  return (
    <>
      <h1>GameRoom</h1>
      <h3>{id}</h3>
    </>
  )
}

export default GameRoom