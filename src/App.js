/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Schedule from './components/basic content/lessons components/Schedule';
import Teachers from './components/basic content/teachers components/Teachers';
import Exams from './components/basic content/exams component/Exams';
import logo from './images/logo.png'
import Loader from './components/loader/Loader';
//import Weeknumber from './components/basic content/lessons components/Weeknumber/WeekNumber'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'start',
      isLoading: true
    };
  };

  showLoader() {
    this.setState({
      isLoading: true,
    });
  }

  hideLoader() {
    this.setState({
      isLoading: false,
    });
  }

  componentDidMount(){
    this.hideLoader();
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading 
          ? <Loader /> : null
        }
          <div className='container'>
            <div className='top-nav'>
              <div className='row justify-content-between align-items-center'>
                <div className='col-md-auto'>
                  <ul className='top-nav_logo'>
                    <li>
                      <div><img src={logo} alt='kpi' className='logo' /></div>
                    </li>
                    <li>
                      <div>Kpi rozklad</div>
                    </li>
                  </ul>
                </div>
              <div className='col-md-auto'>
                  <ul className='top-nav_menu'>
                    <li>
                      <a href='#' onClick={() => this.setState({ currentPage: 'schedule'})}>Розклад занять</a>
                    </li>
                    <li>
                      <a href='#' onClick={() => this.setState({ currentPage: 'exams'})}>Екзамени</a>
                    </li>
                    <li>
                      <a href='#' onClick={() => this.setState({ currentPage: 'teachers'})}>Розклад викладачів</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              <div className='containerContent'>
                {this.state.currentPage === 'schedule' ? <Schedule /> : null}
                {this.state.currentPage === 'exams' ? <Exams /> : null}
                {this.state.currentPage === 'teachers' ? <Teachers /> : null}
              </div>
          </div>
        <footer>
        </footer>
      </div>
    );
  };
};

export default App;