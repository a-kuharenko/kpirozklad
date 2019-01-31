import React, { Component } from 'react';
import Form from'./Form';
import Chart from'./Chart';

class Schedule extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    }
  }

  gettingSchedule = async (event) => {
    event.preventDefault();

    const group = event.target.elements.Schedule.value;
    //const api_url = await fetch(`https://api.rozklad.hub.kpi.ua/groups.json/?search=${group}`);
    const api_url = await fetch(`http://api.rozklad.org.ua/v2/groups/${group}/timetable`);
    const data = await api_url.json();
    this.setState({
      data: data.data.weeks
    });
  }
      
  render(){
    return(
      <div>
        <Form gettingSchedule={this.gettingSchedule}/>
        <Chart weeks={this.state.data}/> 
      </div>
    )
  };
}

export default Schedule;