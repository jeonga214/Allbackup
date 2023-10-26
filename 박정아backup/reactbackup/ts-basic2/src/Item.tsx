import React from 'react'
import {ty_data} from './types';

type tyProps = {
    data:ty_data
};

const Item:React.FC<tyProps> = ({data}):JSX.Element => {
    
  return (
    <div>
        {
            data.map(obj=>(
                <p key={obj.id}>  {obj.item[0].tit}  </p>
            ))
        }

    </div>
  )
}

export default Item;