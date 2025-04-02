import { useState } from "react";


import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    


    const handleClick=()=>{
      setShowIndex()
    }
     return <div>
       <div className="w-6/12 mx-auto shadow-lg bg-gray-50 my-4 p-4 "> 
       <div className="flex justify-between cursor-pointer " onClick={handleClick} >
       <span className="font-bold">{data.title} ({data.itemCards.length})</span>
       <span>{showItems?"⬆️":"⬇️"}</span>
       </div>
     <div>{ showItems && <ItemList  items={data.itemCards} />}</div>
       </div>
     </div>
}

export default RestaurantCategory;