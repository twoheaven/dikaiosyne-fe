import React from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from '../../../hooks/useIsMobile';

// Props 타입 정의
interface CardProps {
  link: string; // Link의 경로
  imgSrc: string; // img 태그의 경로
  alt: string; // alt
}

const Card: React.FC<CardProps> = ({ link, imgSrc, alt }) => {
  const isMobile = useIsMobile(); // 모바일 환경 여부 확인

  return (
    <div style={{ width: '40%' }}>
      <Link
        to={link}
        style={{
          display: 'inline-block',
          backgroundColor: 'white',
          aspectRatio: '1/1',
          overflow: 'hidden', // 이미지가 넘칠 경우 자르기
          borderRadius: '16px', // 모서리 둥글게
          width: '100%',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // 애니메이션 추가
          boxShadow: isMobile ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none', // 모바일에서 항상 그림자
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            // 모바일이 아닌 경우에만 마우스 오버 시 효과 적용
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            // 모바일이 아닌 경우에만 마우스 벗어날 때 효과 제거
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          style={{
            aspectRatio: '1/1',
            width: '100%',
            objectFit: 'cover', // 비율 유지하며 채우기
          }}
        />
      </Link>
    </div>
  );
};

export default Card;
