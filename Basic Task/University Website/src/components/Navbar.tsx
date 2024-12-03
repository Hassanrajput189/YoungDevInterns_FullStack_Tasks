import React from 'react'
import University from './University'
import Academics from './Academics'
import Admissions from './Admissions'
import Departments from './Departments'
import Institutes from './Institutes'
import Directorates from './Directorates'
import Research from './Research'
import Sustainability from './Sustainability'
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
        <University/>
        <Academics/>
        <Admissions/>
        <Departments/>
        <Institutes/>
        <Directorates/>
        <Research/>
        <Sustainability/>
      </div>
      <div className="navFooter"></div>
      </nav>
    </div>
  )
}

export default Navbar
