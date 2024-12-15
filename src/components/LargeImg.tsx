import React from "react";

interface largeImgProp {
  image: string;
}
const LargeImg: React.FC<largeImgProp> = (props) => {
  return (
    <div className="largeImg">
      <img src={props.image} alt="Large Image" />
    </div>
  );
};

export default LargeImg;
