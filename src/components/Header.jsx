import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white ">

      <h1>Logo</h1>

      <nav className="space-x-4">
        <NavLink
          className={(e) => e.isActive ? 'text-red-900' : ''}
          to={'/about-page'}>About</NavLink>


        <Link

          to={'/contact-page'}>Contact</Link>

      </nav>
    </div>
  )
}
export default Header