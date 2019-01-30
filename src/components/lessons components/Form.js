import React from 'react';

const Form = props => (
    <form onSubmit={props.gettingSchedule}>
        <input type='text' name='Schedule' placeholder='Расписание'/>
        <button>Найти расписание</button>
    </form>
);

export default Form;