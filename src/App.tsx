import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import {Works} from "./layout/sections/works/Works";
import {Projects} from "./layout/sections/projects/Projects";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <MainContent>
                    <Main/>
                    <Works/>
                    <Projects/>
                </MainContent>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;

const Container = styled.div`
    width: 1248px;
    margin: 0 auto;
`
const MainContent = styled.main`
    padding: 0 128px;
`