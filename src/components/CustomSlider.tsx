
import { useState, useEffect } from 'react';

const CustomSlider = () => {
  const images = [
    '/largeImg(1).png',
    '/largeImg(2).png',
    '/largeImg(3).png',
    '/largeImg(4).png',
    '/largeImg(5).png',
    '/largeImg(6).png',
    '/largeImg(7).png',
    '/largeImg(8).png'

  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first actual image
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Clone first and last images for seamless looping
  const extendedImages = [
    images[images.length - 1], // Clone last image at the start
    ...images,
    images[0], // Clone first image at the end
  ];

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Dependency array ensures it runs only once

  // Move to the next slide
  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Move to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Handle the snapping behavior for looping
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex === 0) {
      // If at the cloned last image, snap to the last actual image
      setCurrentIndex(images.length);
    } else if (currentIndex === extendedImages.length - 1) {
      // If at the cloned first image, snap to the first actual image
      setCurrentIndex(1);
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none', // Smooth transition only during sliding
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="slide-image"
          />
        ))}
      </div>
      <div className="prev" onClick={prevSlide}>
        <img src="/arrow-circle-previous.png" alt="prev" />
      </div>
      <div className="next" onClick={nextSlide}>
        <img src="/arrow-circle-next.png" alt="next" />
      </div>
    </div>
  );
};

export default CustomSlider;
