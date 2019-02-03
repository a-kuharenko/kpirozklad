import React, { Component } from 'react';
import Schedule from './components/lessons components/Schedule';
import Teachers from './components/Teachers';
import Exams from './components/Exams';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'Schedule'
    };
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ currentPage: 'Schedule'})}>Розклад занять</button>
          <button onClick={() => this.setState({ currentPage: 'Exams'})}>Екзамени</button>
          <button onClick={() => this.setState({ currentPage: 'Teachers'})}>Розклад викладачів</button>
        </div>
        <div>
          {this.state.currentPage === 'Schedule' ? <Schedule /> : null}
          {this.state.currentPage === 'Exams' ? <Exams /> : null}
          {this.state.currentPage === 'Teachers' ? <Teachers /> : null}
        </div>
      </div>
    );
  };
};

export default App;
