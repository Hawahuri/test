import React from 'react'
import AppRoutes from './Routes';


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const userInfo = {
    name: "shreyan",
    role: "cashier"
  }
 return(
   <AppRoutes userInfo={userInfo}/>
  
 );
}

export default App