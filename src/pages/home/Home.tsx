import styled from 'styled-components';
import ImageFader from '../../componets/feature/imagefader/ImageFader';
import About from './about/About';
import Book from './book/Book';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 컴포넌트 임포트

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가운데 정렬 (필요에 따라 삭제 가능) */
  width: 100%; /* 부모 요소의 너비를 100%로 */
`;

const Button = styled.button`
  padding: 12px 25px;
  margin: 50px;
  background: linear-gradient(
    135deg,
    #f5d6a5,
    #eee2d6ff
  ); /* 베이지 톤의 그라데이션 */
  color: #3e2a47; /* 다크한 텍스트 색상 */
  border: none;
  border-radius: 50px;
  font-size: 2rem;
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

function Home() {
  return (
    <HomeWrapper>
      <ImageFader />
      <div id="about-section">
        <About />
      </div>
      <div id="book-section" style={{ width: '100%' }}>
        <Book />
      </div>
      {/* 버튼 추가 */}
      <Link to="https://forms.gle/scgYSDWTmmXa8Xad8">
        <Button>구매하러 가기</Button>
      </Link>
    </HomeWrapper>
  );
}

export default Home;
