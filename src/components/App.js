import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  
  const cityList = [{ name: 'Goa', country: 'India' },
  { name: 'Amsterdam', country: 'Netherlands' },
  { name: 'New York', country: 'USA' },
  { name: 'Darjeeling', country: 'India' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Lonavala', country: 'India' },
  ];
  const indiaCity  = cityList.filter((item, index) => {
    return item.country === "India";
  });
  let array = [];
  const finalindiaCity = indiaCity .map((element, index) => {
    if (!array.includes(element.name)) {
      array.push(element.name);
      return <li key={`location ${index + 1}`}>{element.name}</li>;
    }
  });

  const netherlandCity = cityList.filter((item,index)=>{
    return item.country === "Netherlands"
  })
  console.log(netherlandCity)
  let netherlandArray = [];
  const finalnetherlandCity = netherlandCity.map((temp,index)=>{
    if(!netherlandArray.includes(temp.name)){
      netherlandArray.push(temp.name);
      return <li key={`location ${index + 1}`}>{temp.name}</li>
    }
  });

  const usaCity = cityList.filter((item,index)=>{
    return item.country === "USA";
  });
  let usaArray = [];
  const finalUsaCity = usaCity.map((temp,index)=>{
    if(!usaArray.includes(temp.name)){
      usaArray.push(temp.name);
      return <li key={`location ${index + 1}`}>{temp.name}</li>
    }
  });

  const japanCity = cityList.filter((item,index)=>{
    return item.country === "Japan";
  });

  let japanArray = [];
  const finalJapanCity = japanCity.map((temp,index)=>{
    if(!japanArray.includes(temp.name)){
      japanArray.push(temp.name);
      return <li key={`location ${index + 1}`}>{temp.name}</li>
    }
  })

  return (
    <div id="main">
      <ol>
        {finalindiaCity}
        {finalnetherlandCity}
        {finalUsaCity}
        {finalJapanCity}

      </ol>
      
    </div>
  );
};
export default App;
