import React from 'react';
import SkillList from './components/SkillList';
import NewSkillForm from './components/NewSkillForm';

const App = () => {
  return (
    <div class="container">
      <h1>React Dev Skills</h1>
      <SkillList />
      <NewSkillForm />
    </div>
  );
};

export default App;
