import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CaseStudyPage from './pages/CaseStudyPage'; // Import the new page component
import Home from './pages/Home';
import ReactGA from 'react-ga';
import caseStudyData from './data/caseStudyData';
import SingleCaseStudy from './components/SingleCaseStudy/SingleCaseStudy';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-V30KXHPLQY');
    ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudyPage />} /> 
        <Route path="/case-studies/:slug" element={<SingleCaseStudy caseStudyData={caseStudyData} />} />
      </Routes>
    </Router>
  );
};

export default App;