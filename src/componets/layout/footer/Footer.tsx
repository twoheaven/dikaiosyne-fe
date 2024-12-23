import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: table-column;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: left;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div style={{ marginLeft: '5%' }}>
        <p>(주) 럽앤굿 모먼트 | 대표 : 민인애</p>
        <p>개인정보보호책임자 : 유선주</p>
        <p>E-MAIL : love.goodmoment@gmail.com</p>
        <p>&copy; 2024 럽앤굿 모먼트. All Rights Reserved.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
