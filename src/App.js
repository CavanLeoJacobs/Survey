
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./webapplication/js/Home.js";
import Login from "./webapplication/js/Login.js";
import Registering from "./webapplication/js/Registering.js";
import ViewProfile from "./webapplication/js/ViewProfile.js";
import DataBase from "./webapplication/js/DataBase.js";

import Test from "./webapplication/js/Test.js";


function App()
{

return (
  <>

    <BrowserRouter>
      <Routes>
        <Route>
          <Route index path="/" element={<Login />} />
          <Route  path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Registering" element={<Registering />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />
          <Route path="/DataBase" element={<DataBase />} />
          <Route path="/Test" element={<Test />} />


        </Route>
      </Routes>
    </BrowserRouter>

  </>
  );

}



export default App;
