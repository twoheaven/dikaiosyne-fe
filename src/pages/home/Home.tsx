import styled from 'styled-components';
import ImageFader from '../../componets/feature/fadeinout/ImageFader';
import About from '../about/About';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가운데 정렬 (필요에 따라 삭제 가능) */
  width: 100%; /* 부모 요소의 너비를 100%로 */
  background-color: #fffbef;
`;

function Home() {
  return (
    <HomeWrapper>
      <ImageFader />
      <About />
    </HomeWrapper>
  );
}

export default Home;
