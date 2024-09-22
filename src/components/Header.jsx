import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-black text-white justify-between px-3 flex py-2  items-baseline">

      <h1>Logo</h1>

      <nav className="space-x-4 sm:hidden ">
        <NavLink
          className={(e) => e.isActive ? 'text-red-900' : ''}
          to={'/about-page'}>About</NavLink>
        <Link
          to={'/contact-page'}>Contact</Link>

      </nav>
    </header>
  )
}
export default Header