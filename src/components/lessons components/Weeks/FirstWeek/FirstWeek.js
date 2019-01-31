import React, {Component} from 'react';
import Monday from './Days/Monday';

class FirstWeek extends Component {
  render(props){
    return(
      <div>
        <h2>Первая неделя</h2>
         <div>
           <Monday lessons={this.props.week.days[1]} />
         </div>
      </div>
    )
  }
};

export default FirstWeek;

//{JSON.stringify(this.props.week.days[1])}