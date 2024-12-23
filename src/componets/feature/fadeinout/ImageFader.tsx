import { useState, useEffect } from 'react';
import './ImageFader.css';
import images from './Image';

const ImageFader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 4초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="slider"
          className={`slider-image ${currentIndex === index ? 'fade-in' : 'fade-out'}`}
        />
      ))}
    </div>
  );
};

export default ImageFader;
