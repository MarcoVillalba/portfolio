import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import picture from '../assets/images/picture.png';
import '../assets/styles/Main.scss';

export const Main = () => {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={picture} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MarcoVillalba" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/marco-villalba-012" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Marco Villalba</h1>
          <p>Full Stack Developer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/MarcoVillalba" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/marco-villalba-012" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
