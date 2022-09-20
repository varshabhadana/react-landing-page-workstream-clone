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

  align-items: center;
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
  margin-left: 90px;
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
  margin-top: 24px;
`;
const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1200px;
  height: 100vh;
  padding-top: 120px;
  h1 {
    font-family: sans-serif;
    font-size: 44px;
    line-height: 24px;
    width: 800px;
  }
  p {
    width: 640px;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.5px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
const ButtonStyle = styled.div`
  width: 279px;
  height: 58px;
  border-radius: 45px;
  background-color: #fd435a;
  box-shadow: 0px 0px 0px 6px rgb(253 87 108/25%);
  cursor: pointer;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;
const ButtonStyleDemo = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 45px;
  background-color: #fd576c;
  box-shadow: 0px 0px 0px 6px rgb(253 87 108/25%);
  cursor: pointer;

  font-family: sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 7px 0px 0px 30px;
  padding: 10px;
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
                <a href="a">More</a>
                <ButtonStyleDemo href="a">Schedule Demo</ButtonStyleDemo>
              </Navbar>
            </div>
          </NavigationMenu>
        </Header>
        <Information>
          <Introduction>
            <div>
              <h1>Get A Superhero Design Team</h1>
              <h1>To Grow Your Business</h1>
            </div>
            <div>
              <p>
                We provide an experienced design team that works with you
                everyday to create high-quality design assets to help grow your
                business. Zero headaches, fixed pricing and no contracts.
              </p>
            </div>
            <div>
              <ButtonStyle href="a">SEE OUR PRICING</ButtonStyle>
            </div>
          </Introduction>
        </Information>
      </HeroContainer>
    </div>
  );
}

export default App;
