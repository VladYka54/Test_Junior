import React from 'react';
import  ReactDOM  from 'react-dom';
import { instance } from '../api';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      Ukraine:{
        Country:"",
        CountryCode:"",
        Slug:"",
        newConfirmed: null,
        TotalConfirmed: null,
        NewDeaths:null,
        TotalDeaths:null,
        NewRecovered:null,
        TotalRecovered:null,
        Date:null
      }
    }
  }

  componentDidMount(){
    instance.get("/summary").then(res => {
      const country = res.data.Countries.find((item) => item.Country === 'Ukraine');
      this.setState(
        {
          Ukraine: country,
          CoutryCode:country,
          Slug: country,
          newConfirmed: country,
          TotalConfirmed: country,
          NewDeaths: country,
          TotalDeaths: country,
          NewRecovered: country,
          TotalRecovered: country,
          Date: country,
        }
      )
    })
    }

  render() {

    return (
      <div className="Ukraine">
        
        <div className="UkraineFlag">
        <h2>Ukraine</h2>
        <img src="https://www.5.ua/media/pictures/original/146560.jpg?t=1534932390"/>
        </div>

        <div>
       Country : 
        {this.state.Ukraine.Country}
      </div>

      <div>
       Country Code : 
        {this.state.Ukraine.CountryCode}
      </div>

      <div>
       Slug : 
        {this.state.Ukraine.Slug}
      </div>

      <div>
       New Confirmed : 
        {this.state.Ukraine.NewConfirmed}
      </div>

      <div>
       Total Confirmed : 
        {this.state.Ukraine.TotalConfirmed}
      </div>

      <div>
        New Deaths : 
        {this.state.Ukraine.NewDeaths}
      </div>

      <div>
       Total Deaths : 
        {this.state.Ukraine.TotalDeaths}
      </div>

      <div>
       New Recovered : 
        {this.state.Ukraine.NewRecovered}
      </div>

      <div>
       Total Recovered : 
        {this.state.Ukraine.TotalRecovered}
      </div>

      <div>
       Date : 
        {this.state.Ukraine.Date}
      </div>

           </div>
    )
  }
}


export default App;