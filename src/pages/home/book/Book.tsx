import styled from 'styled-components';
import comfortImg from '/src/assets/book/KakaoTalk_20241224_215259548.png';
import loveImg from '/src/assets/book/KakaoTalk_20241224_215259548_01.png';
import Card from '../../../componets/feature/card/Card';
import Paths from '../../../utils/paths';
import useIsMobile from '../../../hooks/useIsMobile';

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

const Book: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <BookWrapper isMobile={isMobile}>
      <div
        style={{
          marginBottom: isMobile ? '0px' : '60px',
          marginTop: isMobile ? '30px' : '0px',
        }}
      >
        <h2>
          {' '}
          ３０일 키워드 필사노트
          {isMobile && <br />} {/* 모바일에서 줄바꿈 */}
          <span>ｓｅａｓｏｎ１ 。 ＷＩＮＴＥＲ</span>
        </h2>
      </div>
      <CardsContainer isMobile={isMobile}>
        <Card link={Paths.Comfort} imgSrc={comfortImg} alt={'comfort'} />
        <Card link={Paths.Comfort} imgSrc={loveImg} alt={'love'} />
      </CardsContainer>
    </BookWrapper>
  );
};

export default Book;
