import React from 'react';
import "../styles/SkillListItem.css";

const SkillListItems = ({skill}) => {
  return <li className="SkillListItem">
  {skill.name} <span className="level">level: {skill.level}</span>
</li>
};

export default SkillListItems;