import React from 'react'
import Cardproductlist from './Cardproductlist'

export const Cardproduct = ({final,addItem}) => {
    if(!final){
        return;
    }
  return (
    <div className='flex justify-center flex-wrap gap-3'>
        {final?.map((items) => (<Cardproductlist key={items.id} products={items} addItem={addItem}/>))}
    </div>
  )
}
 