import React, {useState} from 'react'
import { Link, useLocation } from "react-router-dom";


const Header1 = () => {
    const [showContent, setShowContent] = useState(false);

   const handleSkillsetClick = (event) => {
    event.preventDefault();
    const skillsetElement = document.getElementById("skillset");

    if (skillsetElement) {
      skillsetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkExperienceClick = (event) => {
    event.preventDefault();
    const handleWorkExperience = document.getElementById("work-experience");

    if (handleWorkExperience) {
      handleWorkExperience.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = (event) => {
    event.preventDefault();
    const handleProject = document.getElementById("project-info");

    if (handleProject) {
      handleProject.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };
  const location = useLocation();
  const isActive = location.pathname !== "/";

  return (
     <header className={`header ${showContent ? "transition" : ""}`}>
        <Link to="/" className="logo" onClick={handleLogoClick}>
          Naman.
        </Link>
        <div
          className={`hamburger-menu ${isActive ? "active" : ""}`}
          onClick={() => window.location.replace("/")}
        ></div>
        <nav className={`navbar ${isActive ? "show" : ""}`}>
          <Link to="/" className="logo" onClick={handleLogoClick}>
            Home
          </Link>
          <Link to="/" onClick={handleSkillsetClick}>
            Skillset
          </Link>
          <Link to="/" onClick={handleWorkExperienceClick}>
            Work Experience
          </Link>
          <Link to="/" onClick={handleProjectClick}>
            Projects
          </Link>
          <Link to="/case-studies">Case Study</Link>
        </nav>
      </header> 
  )
}

export default Header1