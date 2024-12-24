import styled from 'styled-components';
import comfortImg from '/src/assets/book/KakaoTalk_20241224_215259548.png';
import loveImg from '/src/assets/book/KakaoTalk_20241224_215259548_01.png';
import Card from '../../../componets/feature/card/Card';
import Paths from '../../../utils/paths';
import useIsMobile from '../../../hooks/useIsMobile';

const BookWrapper = styled.div`
  padding: 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  aspect-ratio: 2/1;
  max-width: 1000px;
`;

const CardsContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: 'row'; /* 모바일일 때는 세로로, PC일 때는 가로로 배치 */
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: ${(props) =>
    props.isMobile ? '-20px' : '-10%'}; /* 모바일에서는 약간의 여백 추가 */
`;

const Book: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <BookWrapper>
      <CardsContainer isMobile={isMobile}>
        <Card link={Paths.Book} imgSrc={comfortImg} alt={'comfort'} />
        <div style={{ width: isMobile ? '0' : '3%' }} />{' '}
        {/* 모바일에서는 간격을 없애고 PC에서는 유지 */}
        <Card link={Paths.Book} imgSrc={loveImg} alt={'love'} />
      </CardsContainer>
    </BookWrapper>
  );
};

export default Book;
