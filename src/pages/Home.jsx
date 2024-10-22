import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main>
      <h1>Dobrodošli u igru država i gradova</h1>
      <h3>Kreirajte novu igru, ili se pridružite postojećoj</h3>
      <ul className="list home-list">
        <Link
          className="link home-link"
          to='/create'>Nova igra</Link>
        <Link 
          className="link home-link" to='/join'>Pridruži se</Link>
        <Link className="link home-link" to='/rules'>Pravila igre</Link>
      </ul>
    </main>
  )
}

export default Home