import React from "react";
import {Route, Routes} from "react-router-dom";
import VisitAllContinentsCont from "./blockСomponents/VisitAllContinentsCont";
import Home from "./blockСomponents/home/Home";
import GameRules from "./blockСomponents/GameRules/GameRules";
import RecordsCont from "./blockСomponents/Records/RecordsCont";



let App = (props) => {
  return (
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<VisitAllContinentsCont/>}/>
            <Route path="/gamerules" element={<GameRules/>}/>
            <Route path="/records" element={<RecordsCont/>}/>
          </Routes>
        </div>
      </div>
  )

}

export default App;
