import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar'

const times = [
  { time: "10:00", stat: "free" },
  { time: "11:00", stat: "free" },
  { time: "12:00", stat: "free" },
  { time: "13:00", stat: "free" },
  { time: "14:00", stat: "free"},
  { time: "15:00", stat: "free"},
  { time: "16:00", stat: "free"},
  { time: "17:00", stat: "free"},
  { time: "18:00", stat: "free" }
];












class App extends Component {
    state = {
      date: new Date(),
    } 
    onChange = date => this.setState({ date })
  render() {
    return (
      <div>

        <div className="Calend">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        </div>


        <p className="table-title">Бронированиме переговорок</p>
      
        <div>
        <table> 
      <thead>
        <tr>
          Комната
        </tr>
        <tr>
          Зеленая <br /> (до 5 персон)
          <td>
          {PLACES.map((time, status) => (
             
      <button
      className="button-time"
        key={status}
        onClick={() => {
          console.log('Clicked index '+status);
        }}
      >
          {time.time}
      </button>
    ))}
          </td>
        </tr>
        <tr>
          Красная <br /> (до 15 персон)
        </tr>
        <tr>
          Синяя <br /> (до 25 персон)
        </tr>
        <tr>
          Фиолетовая <br /> (до 25 персон)
        </tr>
      </thead>
      <tbody>    
      </tbody> 
    </table>
      </div>
      </div>
    )     
  }
  
}

export default App;
