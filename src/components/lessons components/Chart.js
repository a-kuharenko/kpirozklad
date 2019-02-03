import React, {Component} from 'react';

class Chart extends Component {
  render(props) {

    let chart = [];

    if (this.props.data){
      for(let w = 1; w <= 2; w++){

        if(w === 1){
          chart.push(<h2>Перший тиждень</h2>);
        } else {
          chart.push(<h2>Другий тиждень</h2>);
        }

        for(let d = 1; d <= 6; d++){

          const days = this.props.data.weeks[w].days[d];
           let dayName = 
            <ul><b>{days.day_name}</b></ul>
            chart.push(dayName);

          for(let l = 0; l <= this.props.data.weeks[w].days[d].lessons.length; l++){
            try{
              const lessons = days.lessons[l];

              let lessonsInfo = 
              <div>
                  <u>{lessons.lesson_number} пара: <small> {lessons.time_start}-{lessons.time_end}</small></u>
                  <div>{lessons.lesson_name}</div>
              </div>;
              chart.push(lessonsInfo);
            } catch {
              console.log('error');
            }
            
          }
        }
      }
    } else {
       chart.push(this.props.error);
    };
    
    return(
      <div>
        <div>{chart}</div>
      </div>
    )
  }
};

export default Chart; 