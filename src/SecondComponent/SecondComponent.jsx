import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { instance } from '../api';
import './SecondComponent.css';

const SecondComponent = (props) => {
  const [
    newConfirmed, TotalConfirmed, NewDeaths,
    TotalDeaths, NewRecovered, TotalRecovered, Date
  ] = useState();

  useEffect(
    () => {
      instance.get("/summary").then(res => {
        const global = res.data.Global
      })
    })

  useEffect(() => {

  })

  return (
    <div className="Global">
      <div className="GlobalIMG">
        <h2>Global</h2>
        <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Earth_Globe_Europe_Africa_1024x1024.png?v=1571606068" />
      </div>

      <div>
        New Confirmed :
        {global.newConfirmed}
      </div>

      <div>
        Total Confirmed :
        {global.TotalConfirmed}
      </div>

      <div>
        New Deaths :
        {global.NewDeaths}
      </div>

      <div>
        Total Deaths :
        {global.TotalDeaths}
      </div>

      <div>
        New Recovered :
        {global.NewRecovered}
      </div>

      <div>
        Total Recovered :
        {global.TotalRecovered}
      </div>

      <div>
        Date :
        {global.Date}
      </div>

    </div >
  )
}




export default SecondComponent;