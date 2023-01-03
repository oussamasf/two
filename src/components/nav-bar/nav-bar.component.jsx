import React from 'react'
import "./nav-bar.style.css"


function NavBar() {
  return (
    <div className='nav-bar'>

      <div className='logo'>
      <p>ousf</p>
      </div>
        <div className='other-nav'>
        <p>Our story</p>
        <p>membership</p>
        <p>write</p>
        <p>sign In</p>
        <p className='get-started'>get started</p>
        </div>

    </div>
  )
}

export default NavBar