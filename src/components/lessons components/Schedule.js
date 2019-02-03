import React, { Component } from 'react';
import Form from'./Form';
import Chart from'./Chart';

class Schedule extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      error: undefined
    };
  };

  gettingSchedule = async (event) => {
    event.preventDefault();

    const group = event.target.elements.Schedule.value;
    const api_url = await fetch(`http://api.rozklad.org.ua/v2/groups/${group}/timetable`);
    const data = await api_url.json();

    this.setState({
      data: data.data,
      error: 'Вкажіть вірну назву групи'
    });
  };
      
  render(){
    return(
      <div>
        <Form gettingSchedule={this.gettingSchedule} />
        <Chart 
          data={this.state.data} 
          error={this.state.error} 
        />
      </div>
    );
  };
};

export default Schedule;