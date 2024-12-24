import styled from 'styled-components';
import Paths from '../../../utils/paths';
import logo1 from '/src/assets/KakaoTalk_20241224_233352782.png';
import logo2 from '/src/assets/KakaoTalk_20241224_233552424.png';
import { Link } from 'react-router-dom';
import useIsMobile from '../../../hooks/useIsMobile';

const FooterWrapper = styled.footer<{ isMobile: boolean }>`
  display: ${(props) => (props.isMobile ? 'flex' : 'table-column')};
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'initial')};
  justify-content: ${(props) => (props.isMobile ? 'center' : 'initial')};
  align-items: ${(props) => (props.isMobile ? 'center' : 'initial')};
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: ${(props) => (props.isMobile ? 'center' : 'left')};
  height: 280px;
`;

const StyledLink = styled(Link)`
  color: white; /* 링크 색깔을 흰색으로 설정 */
  text-decoration: underline; /* 밑줄 제거 */

  &:hover,
  &:active {
    color: white; /* 마우스 오버나 클릭 시에도 색깔 유지 */
  }
`;

const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <FooterWrapper isMobile={isMobile}>
      <img
        src={logo1}
        style={{
          width: '180px',
          height: '50px',
          objectFit: 'cover' /* 이미지가 잘리도록 설정 */,
          marginBottom: isMobile
            ? '10px'
            : '0' /* 모바일에서 이미지를 위아래로 약간 떨어지게 함 */,
        }}
      />
      <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
        <p>(주) 럽앤굿 모먼트 | 대표 : 민인애</p>
        <p>사업자 번호 : 121-44-51585</p>
        <p>개인정보보호책임자 : 유선주</p>
        <p>E-MAIL : love.goodmoment@gmail.com</p>
        <p>&copy; 2024 dikaiosyne. All Rights Reserved.</p>
        <p>
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <StyledLink to={Paths.Privacy}>privacy policy</StyledLink>
            <div style={{ width: '10px' }} />
            <StyledLink to={Paths.TermsOfUse}>terms of use</StyledLink>
          </div>
        </p>
      </div>
      <img
        src={logo2}
        style={{
          width: '200px',
          height: '60px',
          objectFit: 'cover',
          marginTop: isMobile ? '10px' : '0',
        }}
      />
    </FooterWrapper>
  );
};

export default Footer;
