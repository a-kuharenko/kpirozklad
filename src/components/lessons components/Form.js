import React from 'react';

const Form = props => (
    <form onSubmit={props.gettingSchedule}>
      <dl>
        <dt><input type='text' name='Schedule' placeholder='Вкажіть групу'/></dt>
        <dt><button>Знайти розклад</button></dt>
      </dl>    
    </form>
);

export default Form;