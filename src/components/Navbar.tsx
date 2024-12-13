import React from 'react'
import DropDownComponent from './DropDownComponent'
const Navbar: React.FC = () => {
  let options = 
  ["option 1", "option 2" , "option 3" , 
    "option 4","option 5" , "option 6"]
  return (
    <div id='nav' className='flex'>
      <nav>
      <div className='upperNav'>
        <span className="muetLogo"><img src="muet_logo.png" alt="" /></span>
        <div className='searchAndLinks '>
        <span className="searchBar flex"> <input type="text" /> Search</span>
        <span className="quickLinks">Quick Links</span>
        </div>
      </div>
      <div className='lowerNav'>
        {/* <University/> */}
        <DropDownComponent name='UNIVERSITY' options={options}/>
        {/* <Academics/> */}
        <DropDownComponent name='ACADEMICS' options={options}/>
        {/* <Admissions/> */}
        <DropDownComponent name='ADMISSIONS' options={options}/>
        {/* <Departments/> */}
        <DropDownComponent name='DEPARTMENTS' options={options}/>
        {/* <Institutes/> */}
        <DropDownComponent name='INSTITUTES' options={options}/>
        {/* <Directorates/> */}
        <DropDownComponent name='DIRECTORATES' options={options}/>
        {/* <Research/> */}
        <DropDownComponent name='RESEARCH' options={options}/>
        {/* <Sustainability/> */}
        <DropDownComponent name='SUSTAINABILITY' options={options}/>
      </div>
      <div className="navFooter"></div>
      </nav>
    </div>
  )
}

export default Navbar
