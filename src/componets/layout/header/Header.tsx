import styled from 'styled-components';
import logo from '/src/assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Paths from '../../../utils/paths';
import Fonts from '../../../styles/font/font';

const HeaderWrapper = styled.header`
  background-color: #ffc898; /* 반투명 배경색 설정 */
  opacity: 0.8;
  color: white;
  padding: 5px 0;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: flex-start; /* 로고와 홈 링크를 양쪽 끝에 배치 */

  /* 로고를 왼쪽으로 배치 */
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 왼쪽 정렬 */
    padding-left: 20px; /* 왼쪽 여백 */
    width: 15%;
  }

  /* Home 링크를 가운데로 배치 */
  .home-container {
    display: flex;
    gap: 10px;
    justify-content: center; /* 가운데 정렬 */
    width: 70%;
  }

  /* 링크 기본 스타일 제거 및 색상 설정 */
  a {
    color: black; /* 파란색이 아닌 검정색으로 설정 */
    text-decoration: none; /* 밑줄 제거 */
    cursor: pointer; /* 마우스를 올리면 손가락 모양으로 변경 */
  }

  /* 링크에 호버 효과 추가 (선택사항) */
  a:hover {
    color: gray; /* 호버 시 색상 변경 */
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string, fallbackPath: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <HeaderWrapper style={{ fontFamily: Fonts.PRegular }}>
      <div className="logo-container">
        <Link to={Paths.Home}>
          <img src={logo} style={{ height: '40px' }} />
        </Link>
      </div>

      <div className="home-container">
        <Link to={Paths.Home}>Home</Link>
        <a onClick={() => scrollToSection('about-section', Paths.Home)}>
          About Us
        </a>
        <a onClick={() => scrollToSection('book-section', Paths.Home)}>Shop</a>
        <Link to={Paths.ContactUs}>Contact Us</Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
