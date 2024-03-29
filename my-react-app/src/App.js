import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"; 
import './App.css';
import { darkTheme } from "./utils/Theme.js";
import { LightTheme } from "./utils/Theme.js";
import { useState } from "react";
// import theme from "./utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";

const Container = styled.div`
  display: flex;

`;

const Main = styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bg}
 
`;
const Wrapper = styled.div`
padding: 22px 96px;
`;

 

function App() {
  const [darkMode, setDarkMode] = useState(true)


  return (
    <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar  />        
        <Wrapper>
          <Routes>
            <Route path="/" >
                <Route index element={<Home />}/>
                <Route path="video">
                <Route path=":id" element={<Video />}/>
                </Route>
            </Route>
          </Routes>
        </Wrapper>        
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
