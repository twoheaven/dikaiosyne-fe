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
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // 애니메이션 추가
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'; // 마우스 오버 시 크기 확대
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)'; // 그림자 추가
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // 마우스 벗어나면 크기 원상복귀
          e.currentTarget.style.boxShadow = 'none'; // 그림자 제거
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
