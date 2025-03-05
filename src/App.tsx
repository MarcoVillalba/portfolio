import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import About from "./components/About";
import BackToTop from "./components/BackToTop";

export const App = () => {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark')
            setMode('light');
        else
            setMode('dark');
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <About/>
            <Expertise/>
            <Timeline/>
            {/*<Project/>*/}
            <Contact/>
            <BackToTop/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
