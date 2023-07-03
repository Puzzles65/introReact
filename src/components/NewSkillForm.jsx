import React, {useState} from 'react';
import "../styles/NewSkillForm.css"

const NewSkillForm = ({ addSkill }) => {
    const initialState = {name: '', level: 3};
    const [newSkill, setNewSkill] = useState(initialState);   

    function handleChange(e) {
        const {name, value} = e.target;
        setNewSkill((prevState) => ({...prevState, [name]: value}));
    }

    function handleAddTo(e) {
        e.preventDefault();
        addSkill(newSkill);
        setNewSkill(initialState);
    }

    return (
        <form className='NewSkillForm' onSubmit={handleAddTo}>
        <label htmlFor='skill'>Skill</label>
        <input
          type='text'
          id='skill'
          name='name'
          value={newSkill.name}
          onChange={handleChange}
        />
        <label htmlFor='level'>Level</label>
        <select
          name='level'
          id='level'
          value={newSkill.level}
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type='submit'>ADD SKILL</button>
        </form>
       
    );
};


export default NewSkillForm;