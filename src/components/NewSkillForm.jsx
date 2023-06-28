import React from 'react';

const NewSkillForm = () => {
    return (
        <form action="form">
            <label htmlFor="skill">Skill</label>
            <input type="text" />
            <label htmlFor="level">Level</label>
            <select name="select" id="select-level">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    );
};


export default NewSkillForm;