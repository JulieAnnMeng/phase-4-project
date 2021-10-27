import React, {useState, useEffect} from "react";
import CreateAdminUser from "./CreateAdminUser";
import Login from "./Login";
import Parent from "./Parent";
import {
   BrowserRouter as Router,
   Route
 } from "react-router-dom";

function Auth ({setUser, user}){

   
 
   if (!user) return <Login setUser={setUser} />;
   if (user) return <Parent user={user} />;

   return (
      <>
         <Route exact path="/login">
            <Login  />
         </Route>
         {/* <Route exact path="/add_new_user">
            <CreateAdminUser />
         </Route> */}
         <Route exact path="/Parent">
            <Parent  />
         </Route>
      </>
   )
}
export default Auth