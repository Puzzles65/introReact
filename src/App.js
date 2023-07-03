import React, { useState } from 'react';
import SkillList from './components/SkillList';
import NewSkillForm from './components/NewSkillForm';




const App = () => {

  const [skills, setSkills] =  useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }

  return (
    <div className='App'>
      <h1 className='teal-text'>React Dev Skills</h1>
      {/*pass skills as a prop*/}
      <SkillList skills={skills} />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
};

export default App;
