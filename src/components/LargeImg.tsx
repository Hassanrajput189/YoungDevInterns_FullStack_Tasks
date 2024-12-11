import React from 'react'

const LargeImgCard:React.FC = () => {
  return (
      <div className="largeImg">
        <div className='prev'>
            <img src="/arrow-circle-previous.png" alt="" />
        </div>
        <img  src="/largeImg(1).png" alt="images" />
        <div className='next'>
            <img src="/arrow-circle-next.png" alt="" />
     </div>
      </div>
  )
}

export default LargeImgCard
