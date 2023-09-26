import {Link, NavLink, Router} from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header>
        <nav className='max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-300'>
        <div className="logo">
          <h4>Logo</h4>
        </div>
        <ul className="nav-links flex">
          <li>
            <a href={'/'} className={`klk`}>
              Home
            </a>
          </li>
          <li>
            <a href={'/about'} className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href={'/square'} className="nav-link">
              Square
            </a>
          </li>
          <li>
            <a href={'/forms'} className="nav-link">
              Forms
            </a>
          </li>
        </ul>
     </nav>

    </header>
  )
}

export default Header