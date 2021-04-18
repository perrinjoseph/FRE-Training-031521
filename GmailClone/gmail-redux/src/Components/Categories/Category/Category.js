import React from 'react'
import './Category.css'


function Category({Icon,title,handelClick,selected}) {
    return (
        <article  onClick={()=>handelClick(title)} className={selected?`category ${title}`:"category"}>
            {<Icon className={selected?"color":"grayIcon"}/>}
            {title}
        </article>
    )
}

export default Category
