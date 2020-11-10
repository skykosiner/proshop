import React from 'react'
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <header>
          <img className="logo" src="/images/logo.svg" alt="logo"></img>
          <nav>
            <ul className="nav__links">
              <li><a href="#"><FiShoppingCart />Cart</a></li>
              <li><a href="#"><FiUser />Sign In</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header
