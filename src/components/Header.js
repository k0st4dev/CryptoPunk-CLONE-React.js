import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

export const Header = () => {
  return (
    <div className='header'>
      <div className='LogoContainer'>
        <img src={punkLogo} className='punkLogo' alt='logo'/>
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={searchIcon} alt='search'/>
        </div>
        <input className='searchInput' placeholder='Collection, item or user...'/>
      </div>

      <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
      </div>

      <div className='headerActions'>
          <div className='themeSwitch'>
          <img src={themeSwitchIcon} alt='switch'/>
          </div>
      </div>
      <div className='loginButton'>GET IN</div>
    </div>
    
  )
}

export default Header;