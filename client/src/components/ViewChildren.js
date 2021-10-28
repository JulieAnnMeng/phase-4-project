import React, {useEffect, useState} from "react";

// import ViewMenu from './ViewMenu';

function ViewChildren({id, name, studentMenu}) {

    return (
        <tr>
            <td>{name}</td>
            <td><button id={id} onClick={studentMenu}>🔎</button></td>
            <td><button>✎</button></td>
        </tr>
           
    )

}
export default ViewChildren