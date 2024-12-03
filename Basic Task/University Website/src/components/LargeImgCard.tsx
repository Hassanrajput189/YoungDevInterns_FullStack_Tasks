import React from 'react'

const LargeImgCard:React.FC = () => {
  return (
    <div>
      <div className="largeImg">
        <div className='prev'>
            <img width={30} src="/arrow-circle-previous.png" alt="" />
        </div>
        <img  src="/largeImg(1).png" alt="images" />
        <div className='next'>
            <img width={30} src="/arrow-circle-next.png" alt="" />
     </div>
      </div>
    </div>
  )
}

export default LargeImgCard
