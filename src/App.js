/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import Background from './Images/Background.png';
import card1 from './Images/card1.svg';
import card3 from './Images/card3.svg';
import cardbg from './Images/cardbg.svg';
import Client1 from './Images/Client1.png';
import Client2 from './Images/Client2.png';
import Client3 from './Images/Client3.png';
import Client4 from './Images/Client4.svg';
import Client5 from './Images/Client5.svg';
import Client6 from './Images/Client6.svg';
import girlcard from './Images/girlcard.svg';
import icon1 from './Images/icon1.svg';
import icon2 from './Images/icon2.svg';
import icon3 from './Images/icon3.svg';
import illustration1 from './Images/illustration1.svg';
import illustration2 from './Images/illustration2.svg';
import illustration3 from './Images/illustration3.svg';
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
const Client = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;
const ClientBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 900px;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 20px;
  img {
    width: 120px;
    height: auto;
    margin-right: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px 0;

  flex-direction: column;
  align-items: center;

  margin-top: 64px;

  h2,
  span {
    font-family: sans-serif;
    font-size: 35px;
    line-height: 46px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
  }
  span {
    color: #50b8dc;
    display: block;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  height: auto;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 401px;
  position: relative;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 23px;
  background-image: url(${cardbg});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const CardImage = styled.img`
  width: 190px;
  position: absolute;
  top: -72px;
`;
const CardImage2 = styled.img`
  width: 140px;
  position: absolute;
  top: -74px;
  margin-left: 10px;
`;
const CardImage3 = styled.img`
  width: 150px;
  position: absolute;
  top: -74px;
`;
const CardContent = styled.div`
  margin-top: 160px;
  padding-right: 10px;
  padding-left: 10px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    font-family: sans-serif;
  }
  p {
    color: #d4d6ff;
    font-size: 17px;
    line-height: 24px;
    width: 100%;
    opacity: 0.9;
  }
`;
const IllustrationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  margin-left: 60px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 30px;
    font-weight: bold;
    font-family: sans-serif;
  }
`;
const ParagraphContent = styled.div`
  color: #d4d6ff;
  font-size: 15px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.2px;
  width: 484px;
`;

const Illustration = styled.img`
  width: 600px;
`;
const Icon = styled.img`
  width: 80px;
  height: 80px;
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
        <Client>
          <ClientBlock>
            <img src={Client2} alt="client logo" />

            <img src={Client1} alt="client logo" />

            <img src={Client3} alt="client logo" />

            <img src={Client4} alt="client logo" />

            <img src={Client5} alt="client logo" />

            <img src={Client6} alt="client logo" />
            <img src={Client4} alt="client logo" />
          </ClientBlock>
        </Client>
        <div className="howItWork">
          <div>
            <TextContainer>
              <h2>
                We get it. Reliable designers <span>are hard to find</span>
              </h2>
            </TextContainer>
            <CardContainer>
              <Card>
                <CardImage src={card3} alt="" />

                <CardContent>
                  <h3>Poor Quality</h3>
                  <p>
                    You're tired of the guessing game to find the right
                    designer.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div>
                  <CardImage2 src={girlcard} alt="" />
                </div>
                <CardContent>
                  <h3>Bad Communication</h3>
                  <p>
                    You're fed up with having to explain yourself multiple
                    times.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div>
                  <CardImage3 src={card1} alt="" />
                </div>
                <CardContent>
                  <h3>Missed Deadlines</h3>
                  <p>
                    You lose hope as deadlines are missed over and over again.
                  </p>
                </CardContent>
              </Card>
            </CardContainer>
          </div>
        </div>
        <TextContainer>
          <h2>
            Design doesn't have to be hard. <span>We make it easy.</span>
          </h2>
        </TextContainer>
        <IllustrationContainer>
          <div>
            <IconContainer>
              <Icon src={icon1} alt="" />
              <h3>Breath-taking Designs</h3>
            </IconContainer>
            <div>
              <ParagraphContent>
                All of our designers are carefully vetted and have years of
                experience working in the design industry.
                <br />
                <br />
                You'll get a dedicated UI Designer, Graphic Designer,
                Illustrator and Project Manager. With a full design team,
                getting breath-taking designs couldn't be any easier!
              </ParagraphContent>
            </div>
          </div>
          <div>
            <Illustration src={illustration1} alt="" />
          </div>
        </IllustrationContainer>
        <IllustrationContainer>
          <div>
            <Illustration src={illustration2} alt="" />
          </div>
          <div>
            <IconContainer>
              <Icon src={icon2} alt="" />
              <h3>Communication That Matters</h3>
            </IconContainer>
            <div>
              <ParagraphContent>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more!
              </ParagraphContent>
            </div>
          </div>
        </IllustrationContainer>
        <IllustrationContainer>
          <div>
            <IconContainer>
              <Icon src={icon3} alt="" />
              <h3>No More Missed Deadlines </h3>
            </IconContainer>
            <div>
              <ParagraphContent>
                Need that design done on a specific date? You can trust us to
                deliver it on time. Once we commit to a date, we'll get it done.
                <br />
                <br />
                Job requests will on average be delivered in a few business
                days. Simpler tasks such as graphic designs and revisions will
                be delivered within 24 hours.
              </ParagraphContent>
            </div>
          </div>
          <div>
            <Illustration src={illustration3} alt="" />
          </div>
        </IllustrationContainer>
      </HeroContainer>
    </div>
  );
}

export default App;
