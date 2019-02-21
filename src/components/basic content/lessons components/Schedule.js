import React, { Component } from 'react';
import Form from'./Form';
import Table from'./Table/Table';

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
    const result = await api_url.json();
    const data = result.data;

    this.setState({
      data,
      error: 'Вкажіть вірну назву групи'
    });
  };

  
  render(){
    return(
      <div>
        <Form gettingSchedule={this.gettingSchedule} />
        <Table 
          data={this.state.data} 
          error={this.state.error} 
        />
      </div>
    );
  };
};

export default Schedule;