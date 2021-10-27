import React, {useEffect, useState} from "react";

// import AddChildren from './AddChildren';
// import ViewChildren from './ViewChildren.js';
// import AddMenuItems from './AddMenuItems';
// import ViewMenu from './ViewMenu';

function Parent({user}) {
    // const [students, setStudents] = useState(null);
    // const [parentSelection, setParentSelection] = useState(null);
    // const [studentSelection, setStudentSelection] = useState(null);
    // let id = user.id;
    

    // function getStudents (id){
    //     console.log(id, user);
    //     // debugger;
    //     fetch(`/api/children/${id}`)
    //     .then(response => response.json())
    //     .then(setStudents)
    //     console.log(students);
    // }

    // function getParentSelection (id){
    //     fetch(`/api/parent_selections/${id}`)
    //     .then(response => response.json())
    //     .then(setParentSelection)
    // }

    // to work on the below after students and parent selection show without errors
    // function setStudentSelection (id)
    
    // useEffect(() => {
    //     console.log(user);
    //     // debugger;
    //     getStudents(id);
    //     // getParentSelection(id);
    // }, [])

    // if (students !== null) {
    //     console.log(students);
    //     // debugger;
    //     const children = students.map(child => {
    //         console.log(child)
    //         // debugger;
    //         let name = `${child.first_name} ${child.last_name}`;
    //         return (
    //             <ViewChildren
    //                 key={child.id}
    //                 child={name}
    //             />
    //         )
    // })}
    
    return (
        <div>
            <h1>Welcome {user.first_name}</h1>
            <p>below you can add your children and add menu items</p>
            <button>Add Children</button>
            <button>Add Menu Items</button>
            {/* {ViewChildren} */}
            <p>to view children here</p>
        </div>
    )

}

export default Parent