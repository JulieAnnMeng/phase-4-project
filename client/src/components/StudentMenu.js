import React from "react";

function StudentMenu({name, meal, item, picture}) {

    // unsure how to use useHistory to reroute to this page. also think the student and the parent should be able to access it. we'll need to discuss

    return (
        <div>
            <h1>{name} Menu Selections</h1>
            <table className='center'>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Item</th>
                        <th>Picture</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{meal}</td>
                        <td>{item}</td>
                        <td><img className="resize" src={picture} alt={item} /></td>
                        <td><button>❌</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default StudentMenu