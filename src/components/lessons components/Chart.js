import React, {Component} from 'react';

class Chart extends Component {
  render(props) {
    let template = null;
    if (this.props.data){
      const weeks = this.props.data.weeks;
      template = Object.keys(weeks).map(item => weeks[item]);
    } else {
      template = this.props.error
    };
    const templateString = JSON.stringify(template);

    return(
      <ul>
        {templateString}
      </ul>
    )
  }
};

export default Chart; 