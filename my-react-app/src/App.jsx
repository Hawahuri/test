import React from 'react'
import AppRoutes from './Routes';


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