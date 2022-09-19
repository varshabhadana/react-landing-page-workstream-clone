/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import Background from './Images/Background.png';
import logo from './Images/logo.svg';

const HeroContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  margin-right: 30px;
  margin-left: 30px;

  width: 100%;
`;
const LogoStyle = styled.img`
  display: block;
  width: 40px;
  height: auto;
`;
const LogoName = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300px;
  text-align: center;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const NavigationMenu = styled.div`
  display: inline-flex;
  height: auto;
  margin-top: 15px;
  padding-top: 3px;
`;

const Navbar = styled.nav`
  display: inline-block;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
`;
const NavAtag = styled.a`
  margin-right: 40px;
`;
const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <HeroContainer>
        <Header>
          <LogoContainer>
            <div>
              <LogoStyle src={logo} alt="pixeltrue logo" />
            </div>
            <LogoName>pixeltrue</LogoName>
          </LogoContainer>
          <NavigationMenu>
            <div>
              <Navbar>
                <NavAtag href="a">Case Studies</NavAtag>
                <NavAtag href="a">Pricing</NavAtag>
                <NavAtag href="a">Our Work</NavAtag>
                <NavAtag href="a">Our Platform</NavAtag>
                <NavAtag href="a">Login</NavAtag>
              </Navbar>
            </div>
            <div>
              <a href="a">More</a>
            </div>
            <div>
              <a href="a">Schedule Demo</a>
            </div>
          </NavigationMenu>
        </Header>
        <Information>
          <Introduction>
            <div>
              <h1>Get A Superhero Design Team To Grow Your Business</h1>
            </div>
            <div>
              <h3>
                We provide an experienced design team that works with you
                everyday to create high-quality design assets to help grow your
                business. Zero headaches, fixed pricing and no contracts.
              </h3>
            </div>
            <div>
              <a href="a">See Our Pricing</a>
            </div>
          </Introduction>
        </Information>
      </HeroContainer>
    </div>
  );
}

export default App;
