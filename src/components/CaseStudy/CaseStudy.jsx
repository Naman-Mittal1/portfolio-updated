import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from "react-tilt";
import caseStudyData from '../../data/caseStudyData.js';

import './CaseStudy.css'; 

const CaseStudy = () => {
  const reversedCaseStudies = caseStudyData.slice().reverse();

  return (
    <div className="case-studies-page">
      <h1 className="case-studies-heading">Case Studies</h1>
      <div className="case-studies-list">
        {reversedCaseStudies.map(caseStudy => (
          <Link to={`/case-studies/${caseStudy.slug}`} style={{textDecoration: 'none'}} className="case-study-card" key={caseStudy.id}>
            <Tilt className="tilt-container" options={{ max: 15, scale: 1.05 }}>
              <div className="tilt-inner">
                <img className="case-study-image" src={caseStudy.imageUrl} alt={caseStudy.title} />
              </div>
            </Tilt>
            <h2 className="case-study-title">{caseStudy.title}</h2>
            <p className="case-study-description">{caseStudy.description}</p>
            <div className="tags">
              {caseStudy.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="read-more-link">Read more</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
