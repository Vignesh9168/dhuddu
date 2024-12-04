import React from 'react'
import ItemsList from '../src/ItemsList'


const Content = ({items, handleCheck, handleDelete}) => {  
    
  return (
    <main>
      <ItemsList
      items = {items}      
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
       />     
    </main>
  )
};

export default Content