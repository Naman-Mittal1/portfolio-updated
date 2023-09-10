import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ReactGA from 'react-ga';
import caseStudyData from './data/caseStudyData';
import CaseStudyPage from './pages/CaseStudyPage';
import SingleCaseStudy from './components/SingleCaseStudy/SingleCaseStudy';
import InterviewPage from './pages/InterviewPage';
import SingleInterview from './components/SingleInterview/SingleInterview';
import Placement from './components/Placement/Placement';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-V30KXHPLQY');
    ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/case-studies" element={<CaseStudyPage />} /> 
        <Route path="/case-studies/:slug" element={<SingleCaseStudy caseStudyData={caseStudyData} />} />
        <Route path="/interviews" element={<InterviewPage />} /> 
        <Route path="/interviews/:slug" element={<SingleInterview/>} />
      </Routes>
    </Router>
  );
};

export default App;