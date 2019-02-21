import React, {Component} from 'react';
import Firstweek from '../Weeks/FirstWeek/Firstweek';
import Secondweek from '../Weeks/SecondWeek/Secondweek';

class Table extends Component {
  render(props) {
    return(
      <div>
        {
          this.props.data ? 
          <table className='table'>
            <thead className='thead-light'>
                <tr>
                  <th>#</th>
                  <th>Час</th>
                  <th>Предмет</th>
                  <th>Аудиторія</th>
                  <th>Викладач</th>
                </tr>
            </thead>
              <Firstweek data={this.props.data} />
              <Secondweek data={this.props.data} />
          </table> 
            :
          <error>{this.props.error}</error>
        }
      </div>
    )
  }
};

export default Table; 