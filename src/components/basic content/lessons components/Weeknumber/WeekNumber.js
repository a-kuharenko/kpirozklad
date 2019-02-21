import React, { Component } from 'react';

class Weeknumber extends Component {
  
  getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
    return weekNo;
  }

  render(){
    const result = this.getWeekNumber(new Date());
    if(result % 2 === 1){
    return(
      <div>
        Зараз перший тиждень
      </div>
    );
    } else {
      return (
        <div>
          Зараз другий тиждень
        </div>
      );
    }
  };
};

export default Weeknumber;