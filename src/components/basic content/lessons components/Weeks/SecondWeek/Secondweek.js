import React, {Component} from 'react';

class Secondweek extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
  };
  
  render(){
    const rend = [];
    if (this.props.data){
      const data = this.props.data;
      rend.push(<tr className='table-style_week'><th>Другий тиждень</th></tr>)
        for(let d = 1; d <= 6; d++){
          const days = data.weeks[2].days[d];
          const dayName = <tr className='table-style_day'><th>{days.day_name}</th></tr>;
          rend.push(dayName);
          for(let l = 0; l <= days.lessons.length; l++){
            try{
              const lessons = days.lessons[l];
              const lessonsInfo = 
              <tr>
                <th>{lessons.lesson_number} пара</th>
                <th>{lessons.time_start}</th>
                <th>{lessons.lesson_name} <h6>{lessons.lesson_type}</h6></th>
                <th>{lessons.lesson_room}</th>
                <th>{lessons.teacher_name}</th>
              </tr>
              rend.push(lessonsInfo);
            } catch {
              console.error('error');
            }
          }
        }
      }
    
    return(
      <tbody>
        {
          this.props.data ?
          rend : null
        }
      </tbody>
    );
  };
}

export default Secondweek;