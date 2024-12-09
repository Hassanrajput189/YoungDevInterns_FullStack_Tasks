import React from 'react'

interface propInterface {
  title: string;
  titleColor: string; 
  image:string;
}

const NewsAndEvents:React.FC<propInterface> = (props) => {
  return (
    <div id = "newsAndEvents">
      <div className="title" style={{ background: props.titleColor }}>
        {props.title}
      </div>
      <div className='flex'>
        <img src={props.image} alt="MUET News" />
        <div>this is a link</div>
      </div>
        <div className='flex'>
        <img src={props.image} alt="MUET News" />
      <div>this is a link</div>
      </div>
      <div className='flex'>
        <img src={props.image} alt="MUET News" />
        <div>this is a link</div>
      </div>
      <div className='viewAll'>View all</div>
    </div>
  )
}

export default NewsAndEvents
