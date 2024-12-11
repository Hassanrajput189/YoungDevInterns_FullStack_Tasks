import React from 'react'

interface dropDownInterface{
    name:string;
    options:string[];
}
const DropDownComponent:React.FC<dropDownInterface> = (props) => {
  return (
    <div id={props.name}>
      <div className="dropDownMenu">{props.name}</div>
      <ul className='dropDownMenuList'>
      {props.options.map((option, index) => (
         <li key={index}>{option}</li>
       ))} 
      </ul>
    </div>
  )
}

export default DropDownComponent;
