import React from "react";
import CreateAdminUser from "./CreateAdminUser";
import Login from "./Login";
import {
   BrowserRouter as Router,
   Route
 } from "react-router-dom";

function Auth (){
   return (
      <>
         <Route exact path="/login">
            <Login />
         </Route>
         <Route exact path="/add_new_user">
            <CreateAdminUser />
         </Route>
      </>
   )
}
export default Auth