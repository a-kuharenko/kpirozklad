import React from 'react';

const Form = props => (
<form onSubmit={props.gettingSchedule}>
  <div className='form-group'>
    <input type='text' className='form-control' name='Schedule' placeholder='Вкажіть групу ' />
    <button className='btn btn-primary'>Розклад занять</button>
  </div>
</form>
);

export default Form;