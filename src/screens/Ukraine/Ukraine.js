import React from 'react'

const Ukraine = React.memo((props) => {
  props.getStat();
  return (
    <div>
      <div>New Confirmed: {props.newConfirmed}</div>
      <div>Total Confirmed: {props.TotalConfirmed}</div>
      <div>Total Deaths: {props.TotalDeaths}</div>
      <div>New Recovered: {props.NewRecovered}</div>
    </div>
  );
});

export default Ukraine;
