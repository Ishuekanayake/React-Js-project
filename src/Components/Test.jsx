import React from 'react';
import Data from './Data.json';

export default function test() {
  return (
    <div>
        Data
        <br/><br/>

        {
            Data.map( Data => {
                return(
                    <div className='box' key={ Data.id}>
                        {Data.title}<br/>
                        {Data.quantity}
                    </div>
                )
            })
        }
    </div>
  )
}
