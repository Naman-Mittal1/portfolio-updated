import React from "react";
import {  VerticalTimeline,   VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode as CodeIcon } from 'react-icons/fa';
import { FaUsers as GroupIcon } from 'react-icons/fa';

import '../Timeline/Timeline.css'

const PlacementTimeLine = () => {
  return (
    <>
    <div id="work-experience">
    <div className="bg-primary">
      <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        College
      </p>
      <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Placement Experience.
      </h2>
    </div>
    
    <VerticalTimeline   >

     <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="10 Sept 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<GroupIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>AppPerfect Corp.</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>Service-Based Company</h5>
        <p>
        Did not get selected in Final Interview Round. 
        </p>
        <p>
        Completed Coding Round.
        </p>
      </VerticalTimelineElement> 

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="6 Sept 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<GroupIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>WatchGuard Technologies</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>Cybersecurity Company</h5>
        <p>
        Did not get selected in Final HR Round. 
        </p>
        <p>
        Completed Aptitude, Technical Interview Round
        </p>
      </VerticalTimelineElement> 

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="30 Aug 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>Motifworks Inc.</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>An AccionLabs Company</h5>
        <p>
        Failed in (Aptitude + Coding) Round.
        </p>
        <p>
        There were Technical Interview Round, GD, HR Round.
        </p>
      </VerticalTimelineElement> 

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="28 Aug 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>Jalan Technologies</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>Software Company</h5>
        <p>
        Did not selected in Coding Round.
        </p>
        <p>
        Total Interview Round = 1
        </p>
      </VerticalTimelineElement> 
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="23 Aug 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<GroupIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>Atrium</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>Salesforce Company</h5>
        <p>
        Did not get selected after second round of Interview at Atrium.
        </p>
        <p>
        Total Interview Round = 3
        </p>
      </VerticalTimelineElement> 

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="16 Aug 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>Sophos</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>Cybersecurity Company</h5>
        <p>
        Failed in Aptitude Round
        </p>
        <p>
        Interview Round = 1
        </p>
      </VerticalTimelineElement> 

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="13 June 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title" style={{color: "#8eeeffcf"}}>Juspay Technologies</h3>
        <h5 className="vertical-timeline-element-subtitle" style={{opacity: "0.8", color: "#d9ecf7", marginTop: "3px"}}>Payment Platform</h5>
        <p>
        Failed in Aptitude Round due to wrong key press
        </p>
        <p>
        There were Multiple Interview + Coding Rounds
        </p>
      </VerticalTimelineElement> 
    </VerticalTimeline>
    </div>
    </>
  );
};

export default PlacementTimeLine;
