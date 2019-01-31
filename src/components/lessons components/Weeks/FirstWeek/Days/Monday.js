import React, {Component} from 'react';

class Monday extends Component {
  render(props){
    const lessons = this.props.lessons.lessons;

    lessons.forEach(obj => {
      const keys = Object.keys(obj);
      keys.forEach(key => {
        if (key === 'day_number') {
          return(key + ':'+ obj[key]);
        }
      });
    })

    return(
      <div>
        <h3>{this.props.lessons.day_name}</h3>
      </div>
    )
  }
};

export default Monday;