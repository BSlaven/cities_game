import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          DiG
        </Link>
      </div>
      <ul className="nav-list">
        <Link className="link nav-link" to='/'>Home</Link>
        <Link className="link nav-link" to='/join'>Join</Link>
        <Link className="link nav-link" to='/create'>Create</Link>
      </ul>
    </nav>
  )
}

export default Navbar