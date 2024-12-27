import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../components/Navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={styles.main}>
    <nav className={styles.navbar}>
      <div className={styles.logo}>Shop😊App</div>

      {/* navigtion links */}
      <ul className={styles.navl}>
          <li className={styles.list}><NavLink to ='/'>Home</NavLink></li>
          <li className={styles.list}><NavLink to ='/About'>About</NavLink></li>
          <li className={styles.list}><NavLink to ='/Product'>Product</NavLink></li>
          <li className={styles.list}><NavLink to ='/ContactUs'>ContactUs</NavLink></li>
      </ul>
      <button className={styles.btn}><NavLink to="/Product">Get Started</NavLink></button>
    </nav>
    </div>
    
  
   {/*  <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active"  to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Product">Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">ContactUs</NavLink>
          </li>
        </ul> */}
  </> 

  )
}

export default Navbar
