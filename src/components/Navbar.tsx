import React from 'react'
import DropDownComponent from './DropDownComponent'
const Navbar: React.FC = () => {
  let options = 
  ["option 1", "option 2" , "option 3" , 
    "option 4","option 5" , "option 6"]
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
        {/* <University/> */}
        <DropDownComponent name='University' options={options}/>
        {/* <Academics/> */}
        <DropDownComponent name='Academics' options={options}/>
        {/* <Admissions/> */}
        <DropDownComponent name='Admissions' options={options}/>
        {/* <Departments/> */}
        <DropDownComponent name='Departments' options={options}/>
        {/* <Institutes/> */}
        <DropDownComponent name='Institutes' options={options}/>
        {/* <Directorates/> */}
        <DropDownComponent name='Directorates' options={options}/>
        {/* <Research/> */}
        <DropDownComponent name='Research' options={options}/>
        {/* <Sustainability/> */}
        <DropDownComponent name='Sustainabilitity' options={options}/>
      </div>
      <div className="navFooter"></div>
      </nav>
    </div>
  )
}

export default Navbar
