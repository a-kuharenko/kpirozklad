import React, { Component } from 'react';
import Schedule from './components/lessons components/Schedule';
import Teachers from './components/Teachers';
import Exams from './components/Exams';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'Schedule' }
  }
  render() {
    return (
      <div className='wrapper'>
      <div>
        <h2 className='menu'>
          <button className='but' onClick={() => this.setState({currentPage: 'Schedule'})}>Schedule</button>
          <button className='but' onClick={() => this.setState({ currentPage: 'Teachers'})}>Teachers</button>
          <button className='but' onClick={() => this.setState({ currentPage: 'Exams'})}>Exams</button>
        </h2>
        <div>
          {this.state.currentPage === 'Schedule' ? <Schedule /> : null}
          {this.state.currentPage === 'Teachers' ? <Teachers /> : null}
          {this.state.currentPage === 'Exams' ? <Exams /> : null}
        </div>
      </div>
      </div>
      );
  }
}

export default App;
