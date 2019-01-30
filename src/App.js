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
    return (<div>
        <button onClick={()=>this.setState({currentPage:'Schedule'})}>Schedule</button>
        <button onClick={() => this.setState({ currentPage: 'Teachers' })}>Teachers</button>
        <button onClick={() => this.setState({ currentPage: 'Exams' })}>Exams</button>
        
        {this.state.currentPage==='Schedule' ? <Schedule /> : null}
        {this.state.currentPage === 'Teachers' ? <Teachers /> : null}
        {this.state.currentPage === 'Exams' ? <Exams /> : null}
      </div>
      );
  }
}

export default App;
