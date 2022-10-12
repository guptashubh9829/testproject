import React from 'react'
import Card from './Card'
import Menu from './Menu_Api'
import { useState } from 'react'

const Restorent = () => {
    const [menuData, setMenuData] = useState(Menu); 

    const filterItem = (category)=>{
      const updatedList = Menu.filter((currEle)=>{
        return currEle.category === category;
      })
    setMenuData(updatedList);
    }
  
  return (
    <>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action" onClick={()=>filterItem("breakfast")}>Breakfast</a>
        <a href="#" class="list-group-item list-group-item-action"onClick={()=>filterItem("lunch")}>Lunch</a>
        <a href="#" class="list-group-item list-group-item-action"onClick={()=>filterItem("dinner")}>Dinner</a>
        <a href="#" class="list-group-item list-group-item-action active"onClick={()=>setMenuData(Menu)}>All</a>

    </div>
    <Card menuData={menuData}/>
     </>
  )
}

export default Restorent