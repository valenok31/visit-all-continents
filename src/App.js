import React from "react";
import {Route, Routes} from "react-router-dom";
import VisitAllContinentsCont from "./blockСomponents/VisitAllContinentsCont";
import Home from "./blockСomponents/home/Home";



let App = (props) => {
  return (
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<VisitAllContinentsCont/>}/>
          </Routes>
        </div>
      </div>
  )

}

export default App;
