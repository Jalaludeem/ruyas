 import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './App.css';

function App() {
  const [state, setState] = useState ({
      options: {
    colour: [ "#E91E63', '#FF9800"],
      Chart : {
          id: "basic-line" 
      },
      xaxis:{ 
            categories: [2000,2001,2002,2003,2004,2005,2006,2008,2009],
        }
      },
      series: [
        {
          name: "People Died",
        data: [10, 20, 35,10, 49, 60, 10,91 ]
        
   }, 
   {
    name: "People Born",
    
  data: [3,60,35,80,49,70,80,81]
  
},   
], 
  },
);

   return (
    <div className="App">

      <h1>*OFFLINE ASSESSMENT (ROUND-1) -Reactjs Frontend Development.</h1>
      <h2>In This Project</h2>
      <h3>1. Develop a WebPage. </h3>
      <h3>2. Plot a Graph X-Axis & Y-Axis data .</h3>
      
      <div className="row">
       <div className="col-4">
       <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="700"
            />
       </div>
    </div>
    </div>
  );
  
   }
export default App;
