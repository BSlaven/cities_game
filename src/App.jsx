import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from './pages/Home';
import CreateNew from './pages/CreateNew';
import JoinRoom from './pages/JoinRoom';

function App() {

  return (
    <Router>      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="join" element={<JoinRoom />} />
        <Route path="create" element={<CreateNew />} />
      </Routes>
    </Router>
  )
}

export default App
