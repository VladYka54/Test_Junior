import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { instance } from '../api';
import './SecondComponent.css';

class SecondComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      newConfirmed: null,
      TotalConfirmed: null,
      NewDeaths: null,
      TotalDeaths: null,
      NewRecovered: null,
      TotalRecovered: null,
      Date: null
    }
  }

  componentDidMount() {
    instance.get("/summary").then(res => {
      const global = res.data.Global;

      this.setState(
        {
          newConfirmed: global.NewConfirmed,
          TotalConfirmed: global.TotalConfirmed,
          NewDeaths: global.NewDeaths,
          NewDeaths: global.NewDeaths,
          TotalDeaths: global.TotalDeaths,
          NewRecovered: global.NewRecovered,
          TotalRecovered: global.TotalRecovered,
          Date: global.Date
        }
      )
      console.log(this.state)
    })
  }

  render() {
    console.log(this)

    return (
      <div className="Global">

        <div className="GlobalIMG">
          <h2>Global</h2>
          <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Earth_Globe_Europe_Africa_1024x1024.png?v=1571606068" />
        </div>

        <div>
          New Confirmed :
          {this.state.newConfirmed}
        </div>

        <div>
          Total Confirmed :
          {this.state.TotalConfirmed}
        </div>

        <div>
          New Deaths :
          {this.state.NewDeaths}
        </div>

        <div>
          Total Deaths :
          {this.state.TotalDeaths}
        </div>

        <div>
          New Recovered :
          {this.state.NewRecovered}
        </div>

        <div>
          Total Recovered :
          {this.state.TotalRecovered}
        </div>

        <div>
          Date :
          {this.state.Date}
        </div>

      </div>
    )
  }
}


export default SecondComponent;