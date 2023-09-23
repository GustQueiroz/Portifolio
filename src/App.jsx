import React from "react";
import Main from './components/main/Main'
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
