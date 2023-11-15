import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItem from './WorksItem';

const Works = () => {
  const [item, setItem] = useState({ name: 'все' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'все') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name.toLowerCase(),
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, i) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(i);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, i) => (
          <span
            onClick={(e) => handleClick(e, i)}
            key={item.id}
            className={`${active === i ? ' active-work' : ''} work__item `}>
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container">
        {projects.map((item) => (
          <WorksItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
