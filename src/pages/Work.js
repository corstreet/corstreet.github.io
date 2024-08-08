import './Work.scss';
import Navbar from '../components/Navbar';
import { workData } from "../data/data";
import { useEffect, useState } from 'react';
import { getSkillsFromData } from '../helpers/helpers';
import { Link } from 'react-router-dom';

function Work() {

  const [skills, setSkills] = useState(null);
  // set category select in state
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [matchedWork, setMatchedWork] = useState(null);

  const addSkillsToState = () => {
    const uniqueArray = getSkillsFromData(workData); 
    setSkills(uniqueArray);
  }

  const filterSkills = (selectedCategory) => {
    if (selectedCategory === "all") {
      setMatchedWork(workData);
      setSelectedCategory("all");
      return
    }
    setSelectedCategory(selectedCategory);
    const matchedWorkItems = workData.filter((match) => {
      return match.tags.includes(selectedCategory);
    })
    setMatchedWork(matchedWorkItems);
  }

  useEffect(() => {
    addSkillsToState();
    setMatchedWork(workData);
  }, [])

  return (
    <div className="container work-container">
      <Navbar />
      <div className="work-header">
        <h1 className="page-headline">WORK</h1>
        <div className="page-headline__subtext">Small collection of applications and websites to which I have contributed.</div>
      </div>
      <div className="skills-dropdown">
        <select value={selectedCategory} onChange={e => filterSkills(e.target.value)} name="skills" id="skills">
          <option value="all">Show all</option>

          {skills?.map((skill, index) => {
            return (
              <option key={index} value={skill}>{skill}</option>
            )
          })}

        </select>
      </div>
      <div className="work">
        <div className="work__wrap">
          {
            matchedWork?.map((work, index) => {
              return (
                <Link key={index} to="/" className="work__thumb">
                  <img src={work.thumbnailURL} alt={`Work from ${work.company}`} className="thumb-image" />
                  <div className="thumb-info">{work.company}</div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Work;
