import React from 'react';

interface BottomImagesProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

const BottomImages: React.FC<BottomImagesProps> = (props) => {
  return (
    <div id="bottomImages">
      <div><img src={props.image1} alt="Image" /></div>
      <div><img src={props.image2} alt="Image" /></div>
      <div><img src={props.image3} alt="Image" /></div>
      <div><img src={props.image4} alt="Image" /></div>
    </div>
  );
};

export default BottomImages;
 