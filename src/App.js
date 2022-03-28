import React from "react";
import {Route, Routes} from "react-router-dom";
import VisitAllContinentsCont from "./blockСomponents/VisitAllContinentsCont";



let App = (props) => {
  return (
      <div>
        <div>
          <Routes>
            <Route path="/visitAllContinents" element={<VisitAllContinentsCont/>}/>
          </Routes>
        </div>
      </div>
  )

}

export default App;
