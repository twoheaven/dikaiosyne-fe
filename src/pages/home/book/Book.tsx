import styled from 'styled-components';
import comfortImg from '/src/assets/book/KakaoTalk_20241224_215259548.png';
import loveImg from '/src/assets/book/KakaoTalk_20241224_215259548_01.png';
import Card from '../../../componets/feature/card/Card';
import Paths from '../../../utils/paths';
import useIsMobile from '../../../hooks/useIsMobile';
import { Link } from 'react-router-dom';

const BookWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  aspect-ratio: ${(props) => (props.isMobile ? '2' : '2.5/1')};
  background-color: wheat;
  width: 100%;
  flex-direction: column;
`;

const CardsContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) =>
    props.isMobile ? 'column' : 'row'}; /* Mobile: column, PC: row */
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.isMobile ? '30px' : '')};
  gap: ${(props) =>
    props.isMobile ? '30px' : '5%'}; /* Mobile: no gap, PC: 16px */
`;

const Button = styled.button`
  padding: 12px 25px;
  margin: 30px;
  background: ${({ theme }) =>
    theme.colors.primary}; /* 베이지 톤의 그라데이션 */
  color: #3e2a47; /* 다크한 텍스트 색상 */
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

const Book: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <BookWrapper isMobile={isMobile}>
      <div
        style={{
          marginBottom: isMobile ? '0px' : '60px',
          marginTop: isMobile ? '30px' : '60px',
        }}
      >
        <h2
          style={{
            fontFamily: 'MaruBuriBold',
          }}
        >
          {' '}
          ３０일 키워드 필사노트
          {isMobile && <br />} {/* 모바일에서 줄바꿈 */}
          <span>ｓｅａｓｏｎ１ 。 ＷＩＮＴＥＲ</span>
        </h2>
      </div>
      <CardsContainer isMobile={isMobile}>
        <Card
          link={Paths.Comfort}
          imgSrc={comfortImg}
          alt={'comfort'}
          name={'위로'}
        />
        <Card
          link={Paths.Comfort}
          imgSrc={loveImg}
          alt={'love'}
          name={'사랑'}
        />
      </CardsContainer>

      {/* 버튼 추가 */}
      <Link to="https://forms.gle/scgYSDWTmmXa8Xad8">
        <Button
          style={{
            marginTop: isMobile ? '0px' : '30px',
            marginBottom: isMobile ? '30px' : '60px',
          }}
        >
          구매하러 가기
        </Button>
      </Link>
    </BookWrapper>
  );
};

export default Book;
