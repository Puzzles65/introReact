import React from 'react';
import SkillListItems from './SkillListItems';

const SkillList = ({skills}) => {


  //const skillsListItems = skills.map(s => <SkillListItems skill = {s}/>)
  return (
    <ul>
      {skills.map((s, idx) => (
        <SkillListItems skill={s} key={idx}/>
      ))}
    </ul>
  );
};

export default SkillList;