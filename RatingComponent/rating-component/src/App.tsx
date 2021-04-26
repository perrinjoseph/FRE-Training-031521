import { render } from '@testing-library/react';
import React, { useState } from 'react';
import StarRating from './StarRating/StarRating';
const App:React.FunctionComponent = ()=>{
    const [state,setState] = useState(0);
    return(
        <div>
            <h1>Counter{" "}{state}</h1>
            <StarRating defaultRating={1} size={20} getRating={(e:number)=>setState(e)}/>
        </div>
    )
}
export default App;