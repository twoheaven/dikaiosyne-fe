import styled from 'styled-components';
import comfortImg1 from '/src/assets/love/1 인트로.png';
import comfortImg2 from '/src/assets/love/2 추천.png';
import comfortImg3 from '/src/assets/love/3 차별점.png';
import comfortImg4 from '/src/assets/love/4 사랑.png';
import comfortImg5 from '/src/assets/love/5 정보.png';
import { Link } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';

const Button = styled.button`
  padding: 12px 25px;
  margin: 30px;
  background: ${({ theme }) =>
    theme.colors.primary}; /* 베이지 톤의 그라데이션 */
  color: white; /* 다크한 텍스트 색상 */
  border: none;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease; /* 애니메이션 효과 */

  &:hover {
    transform: translateY(-3px); /* 버튼이 약간 위로 떠오르는 효과 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 그림자 효과 강하게 */
  }

  &:active {
    transform: translateY(2px); /* 클릭 시 눌리는 느낌 */
  }

  &:focus {
    outline: none;
  }
`;

const Love: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        width: '100%',
        marginTop: '55px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 수직 중앙 정렬
        justifyContent: 'center', // 수평 중앙 정렬
      }}
    >
      <img
        src={comfortImg1}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg2}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg3}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg4}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />
      <img
        src={comfortImg5}
        style={{
          width: '100%',
          maxWidth: '700px',
        }}
      />

      {/* 버튼 추가 */}
      <Link to="https://smartstore.naver.com/dikaiosyne/products/11321190031">
        <Button
          style={{
            marginTop: isMobile ? '30px' : '60px',
            marginBottom: isMobile ? '30px' : '60px',
            fontFamily: 'Pretendard-Bold',
          }}
        >
          구매하러 가기
        </Button>
      </Link>
    </div>
  );
};

export default Love;
