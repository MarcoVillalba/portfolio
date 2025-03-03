import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

export const Main = () => {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGgwJ0wznh9dw/profile-displayphoto-shrink_400_400/B4DZVTgI73HkAg-/0/1740862693289?e=1746057600&v=beta&t=AExtLW8Gm32LdBjo5CoG0-NlVp-axaaO0shjiItv6k8" alt="Avatar" />
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
