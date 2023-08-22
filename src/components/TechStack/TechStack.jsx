import React from 'react'
import './TechStack.css'
import styles from "../Skillset/Skillset.module.css";
import { Tilt } from "react-tilt";
import HTML5 from '../../assets/HTML5.png';
import MongoDB from '../../assets/mongodb.png';
import Cplus from '../../assets/C++.png';
import CSS from '../../assets/css.png';
import JQuery from '../../assets/Jquery.png';
import Javascript from '../../assets/js.png';
import Reactimg from '../../assets/react.png';
import Nodejs from '../../assets/nodejs.png';
import github from '../../assets/github.png';
import git from '../../assets/git.png';
import Scikit from '../../assets/scikit.png';
import Python from '../../assets/Python.png';
import pandas from '../../assets/pandas.png';
import aws from '../../assets/aws.png';
import sql from '../../assets/sql.png';
import numpy from '../../assets/numpy.png';

const TechStack = ({techs}) => {

    const techImages = {
        HTML5: HTML5,
        MongoDB: MongoDB,
        CSS: CSS,
        Cplus: Cplus,
        JQuery: JQuery,
        Javascript: Javascript,
        React: Reactimg,
        NodeJS: Nodejs,
        github: github,
        git: git,
        Scikit_Learn: Scikit,
        Python: Python,
        Pandas: pandas,
        SQL: sql,
        AWS: aws, 
        Numpy: numpy,


      };

    return (
      <div className="tech-stack-images">  
        {techs.map(tech => (
          <Tilt key={tech} className="Tilt" options={{max: 30, scale: 1.1}}>
          
            <div className={`${styles.card} ${styles.hoverEffect}`}>
              <div className="Tilt-inner">
                <img src={techImages[tech]} alt={tech} className={styles.image}/> 
              </div>
              <h3 className={styles.title}>{tech}</h3>
            </div>
            
          </Tilt>
        ))}
      </div>
    )
  
  }

export default TechStack