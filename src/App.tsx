import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import {Works} from "./layout/sections/works/Works";
import {Projects} from "./layout/sections/projects/Projects";
import {Footer} from "./layout/footer/Footer";
import {Reviews} from "./layout/sections/reviews/Reviews";
import {Container} from "./components/Container";
import {theme} from "./components/styles/Theme";


function App() {
    return (
        <div className="App">

                <Header/>
            <Container>
                <MainContent>
                    <Main/>
                    <Works/>
                    <Reviews />
                    <Projects/>
                </MainContent>
                </Container>
                <Footer/>

        </div>
    );
}

export default App;

const MainContent = styled.main`
    padding: 0 128px;

    @media ${theme.media.mobile} {
        padding: 0 16px;
    }
`