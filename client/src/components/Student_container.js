import React, { useEffect, useState } from "react";
import FoodSelecion from "./FoodSelection";

function StudentContainer({user}){

    return(
        <div>
            <h1>Hello {user.first_name},</h1>
            <p>
                Welcome to Cafeteria Delight. This is your one stop shop to
                manage your school's menu.
            </p>
            <p>
                Feel free to add menu items to the list. These items will be
                sent to your school's cafeteria menu.
            </p>
        </div>
    )
}

export default StudentContainer;