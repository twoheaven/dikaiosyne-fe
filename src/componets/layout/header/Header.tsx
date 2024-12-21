import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin: 0 10px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>My Web Template</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Service</a></li>          
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
