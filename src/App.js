import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RiVirusLine } from "react-icons/ri";
import AboutUs from "./pages/AboutUs";
import AboutProject from "./pages/AboutProject";

import { homeData } from "./data/home";
import Home2 from "./pages/Home2";

const GlobalStyle = createGlobalStyle`
body{
  background-color: #0a1318;
}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 14px ;
    font-weight: 300;
}`;

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Router>
        <Header>
          <Logo>
            {homeData.projName1}
            <RiVirusLine size={30} />
            {homeData.projName2}
          </Logo>

          <Menu>
            <MenuItem to="/">{homeData.menu.item1}</MenuItem>
            <MenuItem to="/about-us">{homeData.menu.item2}</MenuItem>
            <MenuItem to="/about-project">{homeData.menu.item3}</MenuItem>
          </Menu>
        </Header>

        <MainSections>
          <Switch>
            <Route exact path="/" component={Home2} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/about-project" component={AboutProject} />
          </Switch>
        </MainSections>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #0a1318;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 40px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled.div`
  color: #57ffa1;
  cursor: pointer;
  font-weight: 400;
`;
const MenuItem = styled(Link)`
  color: #57ffa1;
  text-decoration: none;
  margin: 0 5px;
  border-bottom: solid transparent 2px;
  font-weight: 500;
  transition: ease-in 0.1s;

  &:hover {
    border-bottom: solid 2px;
    color: #57ffa1;
  }
`;
const MainSections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: calc(100vh - 40px);
`;
