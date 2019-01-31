import React, {Component} from 'react';
import FirstWeek from './Weeks/FirstWeek/FirstWeek';
import SecondWeek from './Weeks/SecondWeek/SecondWeek';

class Chart extends Component {
  render(props) {
    return (
      <div>
        { this.props.weeks && 
        <div>
          <FirstWeek week={this.props.weeks[1]} />
          <SecondWeek week={this.props.weeks[2]} />
        </div>
        }
      </div>
    );
  };
};

export default Chart; 
