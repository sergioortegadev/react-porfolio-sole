import { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6"
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar'>

        <a className='navbar__title' href="/">Porfolio</a>
        
        <div className='navbar__menu' >
            
            <div className='navbar__menu--btn' onClick={handleMenuToggle} >
              { 
                menuOpen 
                ? (<FaBars size={30} color="white"/> )
                : (<FaXmark size={30} color="white"/>) 
              }
            </div>
          
            <ul className={`navbar__menu--items ${menuOpen ? 'open' : ''}`}  >
                <li className='navbar__menu--item-list'><a className='navbar__menu--item-list_link' href="/#about">About</a></li>
                <li className='navbar__menu--item-list'><a className='navbar__menu--item-list_link' href="/#experience">Experience</a></li>
                <li className='navbar__menu--item-list'><a className='navbar__menu--item-list_link' href="/#projects">Projects</a></li>
                <li className='navbar__menu--item-list'><a className='navbar__menu--item-list_link' href="/#contact">Contact</a></li>
              
                {/* <NavLink to={'/about'} >Sobre mi</NavLink>
                <NavLink to={'/experience'}>Experiencia</NavLink>
                <NavLink to={'/projects'}>Proyectos</NavLink>
                <NavLink to={'/contact'}>Contacto</NavLink> */}

            </ul>

        </div>
    </nav>
  )
}
