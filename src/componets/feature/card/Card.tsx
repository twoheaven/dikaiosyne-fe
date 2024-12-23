import React from 'react';
import { Link } from 'react-router-dom';

// Props 타입 정의
interface CardProps {
  link: string; // Link의 경로
  imgSrc: string; // img 태그의 경로
  alt: string; // alt
}

const Card: React.FC<CardProps> = ({ link, imgSrc, alt }) => {
  return (
    <div style={{ width: '40%' }}>
      <Link
        to={link}
        style={{
          display: 'inline-block',
          backgroundColor: 'white',
          aspectRatio: 1 / 1,
          overflow: 'hidden', // 이미지가 넘칠 경우 자르기
          borderRadius: '16px', // 모서리 둥글게
          width: '100%',
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          style={{
            aspectRatio: '9/16',
            width: '56.25%',
            objectFit: 'cover', // 비율 유지하며 채우기
          }}
        />
      </Link>
    </div>
  );
};

export default Card;
