import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./Components/Tours";


const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id){
      // New tour Ka Object Banaya Jisme hmm vo tour dalenge jinki id not equal to tour
    const newTours = tours.filter(tour => tour.id!== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>
          No Tours Left
        </h2>

        <button className="refresh-btn" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours = {tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
