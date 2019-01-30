import React, { Component } from 'react';
import Form from'./Form';

// eslint-disable-next-line react/require-render-return
class Schedule extends Component {

    gettingSchedule = async (event) => {
        event.preventDefault();
            //const group = event.target.elements.group.value;
            // eslint-disable-next-line
            const group = event.target.elements.Schedule.value;
            //const api_url = await fetch(`https://api.rozklad.hub.kpi.ua/groups.json/?search=${group}`);
            const api_url = await fetch(`http://api.rozklad.org.ua/v2/groups/${group}/timetable`);
            const data = await api_url.json();
            //console.log(data)
        }
       
    render(){
        return(
            <div>
               <Form gettingSchedule={this.gettingSchedule}/>
            </div>
        )
    };
}
export default Schedule;