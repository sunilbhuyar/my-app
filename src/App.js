import { Table } from "@mui/material";
import { Profiler,useEffect,useState } from "react";
import CardDetails from "./Component/CardDetails";
import First from "./Component/First";
import BasicTextFields from './Component/Form';


 function App(){

  

  const[showCard,setShowCard]=useState(true)
  const[item,setItem]=useState([])
  const [editItem,setEditItem]=useState({})

  const setItemCollection=(object)=>{

    let collection=item

    if(object.id){
      collection=collection.map(item=>{
        if(item.id===object.id){return object}else{return item}
      })
    }
    else{
    collection.push({id:Math.random(),...object})
    }
    setItem(collection)
    toggleShowCard(true)
  }

  const toggleShowCard=(boolean,object)=>{

   if(object){
     setEditItem(object)
     setShowCard(boolean)
   }
   else{
    setEditItem(object)
    setShowCard(boolean)
   }

    
  }

  const deleteCard=(index)=>{

    let collection=item
  setItem(collection.filter((value,i)=>i!==index))
  }
  return <div>

    
    {
      showCard===true?
    <CardDetails  toggleShowCard={toggleShowCard} deleteCard={deleteCard} collection={item}></CardDetails>:<BasicTextFields toggleShowCard={toggleShowCard} setItemCollection={setItemCollection} editCard={editItem} ></BasicTextFields>
 }
 

 
 </div>


// function debounce(fn, delay) {
//   let timeout;
//   return function (args) {
//     if (timeout!==undefined) {
//       clearTimeout(timeout);
//     }
//      timeout=setTimeout(() => {
//       return fn(args);
//     }, delay);
//   };
// }

// function call() {
  
//     console.log('result')
  
// }
}

export default App