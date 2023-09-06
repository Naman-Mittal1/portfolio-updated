import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from "react-tilt";
import interviewData from '../../data/interviewData.js';

const Interview = () => {
  const reversedInterviews = interviewData.slice().reverse();

  return (
    <div className="case-studies-page">
      <h1 className="case-studies-heading">My Interviews</h1>
      <div className="case-studies-list">
        {reversedInterviews.map(interview => (
          <Link to={`/interviews/${interview.slug}`} style={{textDecoration: 'none'}} className="case-study-card" key={interview.id}>
            <Tilt className="tilt-container" options={{ max: 15, scale: 1.05 }}>
              <div className="tilt-inner">
                <img className="case-study-image" src={interview.imageUrl} alt={interview.title} />
              </div>
            </Tilt>
            <h2 className="case-study-title">{interview.title}</h2>
            <p className="case-study-description">{interview.description}</p>
            <div className="tags">
              {interview.tags.map(tag => (
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

export default Interview;
