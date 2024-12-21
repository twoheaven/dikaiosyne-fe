import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 My Web Template. All Rights Reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
