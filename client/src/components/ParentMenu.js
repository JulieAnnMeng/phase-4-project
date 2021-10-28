import React, {useEffect, useState} from "react";

// import ViewMenu from './ViewMenu';

function ParentMenu({id, meal, item, picture}) {

    // function handleDelete (e) {
    //     e.preventDefault();
    //     let id = parseInt(e.target.id)
    //     fetch(`/api/parent_selections/${id}`, {
    //         method: "DELETE", 
    //     })
    //     .then(response => response.json())
    // }onClick={handleDelete}

    return (
        <tr>
            <td>{meal}</td>
            <td>{item}</td>
            <td><img className="resize" src={picture} alt={item} /></td>
            <td><button id={id} >❌</button></td>
        </tr>
    )

}
export default ParentMenu