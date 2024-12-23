import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: rgba(251, 251, 251, 0.5); /* 반투명 배경색 설정 */
  color: white;
  padding: 10px 0;
  text-align: left;

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin: 0 10px;
  }

  nav ul li a {
    color: black;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
