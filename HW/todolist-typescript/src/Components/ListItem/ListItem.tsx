import React from 'react'

// interface listItemProps {
//     todo:{
//         title:string;
//         complete: boolean;
//     };

//     color: {
//         color:string;
//     };
// }

interface listItemProps {
    todo:todo
}

type todo={
    title:string;
    complete:boolean;
}

type color ={
    color:"red" | "green" | "yellow"
}

const ListItem:React.FC = function(){
    return (
        <article className="listItem">
            
        </article>
    )
}

export default ListItem
