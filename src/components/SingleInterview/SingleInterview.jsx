import React from 'react';
import { useParams } from 'react-router-dom';
import '../SingleCaseStudy/SingleCaseStudy.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import interviewData from '../../data/interviewData.js';


const SingleInterview = () => {


  const { slug } = useParams();

  const selectedInterview = interviewData.find(interview => interview.slug === slug);

  if (!selectedInterview) {
    return <div>Interview not found</div>;
  }



  return  (
    <>
      <Header />

      <div className="single-case-study-page">
        <div className="single-case-study-header">
          <h1 className="single-case-study-title">{selectedInterview.title}</h1>
          <div className="single-case-study-tags">
            {selectedInterview.tags.map(tag => (
              <span key={tag} className="single-case-study-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="single-case-study-image">
          <img src={selectedInterview.imageUrl} alt={selectedInterview.title} />
        </div>
        <div className="single-case-study-overview">
          <h2 className="section-heading">Overview</h2>
          <p>{selectedInterview.overviewPara1}</p>
          <p>{selectedInterview.overviewPara2}</p>
          
          <p>{selectedInterview.overviewPara3}</p>
          <p>{selectedInterview.overviewPara4}</p>
          <p>{selectedInterview.overviewPara5}</p>
          <p>{selectedInterview.overviewPara6}</p>
        </div>
        <h2 className="section-heading">{selectedInterview.featuresHeading}</h2>
        <div className="features-cards">
          <div className="features-card">
            <h3>{selectedInterview.featuresPointHeading1}</h3>
             <p>{selectedInterview.featuresPoint1}</p>
          </div>
          <div className="features-card">
            <h3>{selectedInterview.featuresPointHeading2}</h3>
             <p>{selectedInterview.featuresPoint2}</p>
          </div>
          <div className="features-card">
            <h3>{selectedInterview.featuresPointHeading3}</h3>
             <p>{selectedInterview.featuresPoint3}</p>
          </div>
          <div className="features-card">
            <h3>{selectedInterview.featuresPointHeading4}</h3>
             <p>{selectedInterview.featuresPoint4}</p>
          </div>
          <div className="features-card">
            <h3>{selectedInterview.featuresPointHeading5}</h3>
             <p>{selectedInterview.featuresPoint5}</p>
          </div>
        </div>
        {/* <div className="features-image">
            <img src={selectedInterview.image2} alt={selectedInterview.img} />
            <img src={selectedInterview.image3} alt={selectedInterview.img} />
          </div> */}


        <div className="single-case-study-overview">
          <h2 className="section-heading">Interview Rounds Discussion</h2>
          <div>
            <h3 style={{color: "#8592a3"}}>{selectedInterview.interviewRound1}</h3>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round1Content1}</p>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round1Content2}</p>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round1Content3}</p>
          </div>

          <div>
            <h3 style={{color: "#8592a3"}}>{selectedInterview.interviewRound2}</h3>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round2Content1}</p>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round2Content2}</p>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round2Content3}</p>
          </div>


          <div>
            <h3 style={{color: "#8592a3"}}>{selectedInterview.interviewRound3}</h3>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round3Content1}</p>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round3Content2}</p>
            <p style={{color: "#dae1eb"}}>{selectedInterview.round3Content3}</p>
          </div>

        </div>

        <div className="single-case-study-conclusion">
          <h2 className="section-heading">{selectedInterview.conclusion}</h2>
          <p>{selectedInterview.conclusionPara1}</p>
          <p>{selectedInterview.conclusionPara2}</p>


          {/* <span >{selectedInterview.lastInfo} <a style={{textDecoration: 'none'}} href={selectedInterview.exploreLink}>Click here</a></span> */}
        </div>

        
        <div className="single-case-study-cta">
          <a href="https://www.linkedin.com/in/namanmittal1/"><button className="cta-button">Let's Connect</button></a>
        </div>
        
      </div>
          
      <Footer />
    </>
  );
};

export default SingleInterview;
