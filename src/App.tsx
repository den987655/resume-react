import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main'
import {Skills} from "./layout/skills/Skills";
import {FlexWrapper} from "./components/FlexWrapper";



function App() {
    return (
      <div className="App">
          <AppStyled>
              <Header/>
              <Main/>
              <Skills />
          </AppStyled>
      </div>
    );
}

export default App;

const AppStyled = styled.div`

    background-color: #0d0d0d;
`
