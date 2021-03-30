import React, { useState } from 'react'
import '../Styles/Dropdown.css'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Done from '@material-ui/icons/Done'

function Dropdown() {
    const [open,setOpen] = useState(false);
    return (
        <div className="dropdown">
                <div className="dropdown__options__button">
                    <IconButton onClick={()=>setOpen(!open)}>
                        <MoreHorizIcon/>
                    </IconButton>
                </div>
                {open?( 
                <div className="dropdown__options">
                    <div className="dropdown__options__delete">
                        <IconButton >
                            <Delete style={{height:"18px", width:"18px"}}/>   
                        </IconButton>
                    </div>
                    <div className="dropdown__options__edit">
                        <IconButton >
                            <Edit style={{height:"18px", width:"18px"}}/>
                        </IconButton>
                    </div>
                    <div className="dropdown__options__completed">
                        <IconButton >
                            <Done style={{height:"18px", width:"18px"}}/>
                        </IconButton>
                    </div>
                </div>
            ):""}
        </div>
    )
}

export default Dropdown
