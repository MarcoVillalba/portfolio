import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

export const Footer= () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/MarcoVillalba" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/marco-villalba-012" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Designed & built by <a href="https://linktr.ee/mirkov012" target="_blank" rel="noreferrer">Marco Villalba</a></p>
    </footer>
  );
}

export default Footer;
