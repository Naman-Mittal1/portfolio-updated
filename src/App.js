import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CaseStudyPage from './pages/CaseStudyPage'; // Import the new page component
import Home from './pages/Home';
import caseStudyData from './data/caseStudyData';
import SingleCaseStudy from './components/SingleCaseStudy/SingleCaseStudy';

const App = () => {
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