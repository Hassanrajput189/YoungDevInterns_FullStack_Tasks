import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
      <div className='upperNav'>
        <span className="muetLogo"><img src="muet_logo.png" alt="" /></span>
        <div className='searchAndLinks'>
        <span className="searchBar"> <input type="text" /> Search</span>
        <span className="quickLinks">Quick Links</span>
        </div>
      </div>
      <div className='lowerNav'>
        
      </div>
      </nav>
    </div>
  )
}

export default Navbar
