import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleCaseStudy.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TechStack from '../TechStack/TechStack';


const SingleCaseStudy = ({ caseStudyData }) => {


  const { slug } = useParams();

  const selectedCaseStudy = caseStudyData.find(caseStudy => caseStudy.slug === slug);

  if (!selectedCaseStudy) {
    return <div>Case study not found</div>;
  }

  const techs = selectedCaseStudy.techStack.split(', ');


  return  (
    <>
      <Header />

      <div className="single-case-study-page">
        <div className="single-case-study-header">
          <h1 className="single-case-study-title">{selectedCaseStudy.title}</h1>
          <div className="single-case-study-tags">
            {selectedCaseStudy.tags.map(tag => (
              <span key={tag} className="single-case-study-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="single-case-study-image">
          <img src={selectedCaseStudy.imageUrl} alt={selectedCaseStudy.title} />
        </div>
        <div className="single-case-study-overview">
          <h2 className="section-heading">Overview</h2>
          <p>{selectedCaseStudy.overviewPara1}</p>
          <p>{selectedCaseStudy.overviewPara2}</p>
          
          <p>{selectedCaseStudy.overviewPara3}</p>
        </div>
        <h2 className="section-heading">Key Features</h2>
        <div className="features-cards">
          <div className="features-card">
            <h3>{selectedCaseStudy.featuresPointHeading1}</h3>
             <p>{selectedCaseStudy.featuresPoint1}</p>
          </div>
          <div className="features-card">
            <h3>{selectedCaseStudy.featuresPointHeading2}</h3>
             <p>{selectedCaseStudy.featuresPoint2}</p>
          </div>
          <div className="features-card">
            <h3>{selectedCaseStudy.featuresPointHeading3}</h3>
             <p>{selectedCaseStudy.featuresPoint3}</p>
          </div>
          <div className="features-card">
            <h3>{selectedCaseStudy.featuresPointHeading4}</h3>
             <p>{selectedCaseStudy.featuresPoint4}</p>
          </div>
          <div className="features-card">
            <h3>{selectedCaseStudy.featuresPointHeading5}</h3>
             <p>{selectedCaseStudy.featuresPoint5}</p>
          </div>
        </div>
        {/* <div className="features-image">
            <img src={selectedCaseStudy.image2} alt={selectedCaseStudy.img} />
            <img src={selectedCaseStudy.image3} alt={selectedCaseStudy.img} />
          </div> */}
        <div className="single-case-study-benefits">
          <h2 className="section-heading">Benefits</h2>
          <div className="benefits-cards">
            <div className="benefit-card">
              <h3>{selectedCaseStudy.benifitsPointHeading1}</h3>
              <p>{selectedCaseStudy.benifitsPoint1}</p>
            </div>
            <div className="benefit-card">
              <h3>{selectedCaseStudy.benifitsPointHeading2}</h3>
              <p>{selectedCaseStudy.benifitsPoint2}</p>
            </div>
            <div className="benefit-card">
              <h3>{selectedCaseStudy.benifitsPointHeading3}</h3>
              <p>{selectedCaseStudy.benifitsPoint3}</p>
            </div>
            <div className="benefit-card">
              <h3>{selectedCaseStudy.benifitsPointHeading4}</h3>
              <p>{selectedCaseStudy.benifitsPoint4}</p>
            </div>
            <div className="benefit-card">
              <h3>{selectedCaseStudy.benifitsPointHeading5}</h3>
              <p>{selectedCaseStudy.benifitsPoint5}</p>
            </div>
          </div>
        </div>

        <div className="single-case-study-conclusion">
          <h2 className="section-heading">Conclusion</h2>
          <p>{selectedCaseStudy.conclusionPara1}</p>
          <p>{selectedCaseStudy.conclusionPara2}</p>


          <h3>Tech Stack Used: </h3>
          <p></p>    
          
          <TechStack techs={techs} />

          <h3>{selectedCaseStudy.teamMember}</h3>
          <p>{selectedCaseStudy.teamMember1}</p>
          <p>{selectedCaseStudy.teamMember2}</p>
          <p>{selectedCaseStudy.teamMember3}</p>

          <span >{selectedCaseStudy.lastInfo} <a style={{textDecoration: 'none'}} href={selectedCaseStudy.exploreLink}>Click here</a></span>
        </div>

        
        <div className="single-case-study-cta">
          <a href="https://www.linkedin.com/in/namanmittal1/"><button className="cta-button">Let's Connect</button></a>
        </div>
        
      </div>
          
      <Footer />
    </>
  );
};

export default SingleCaseStudy;
