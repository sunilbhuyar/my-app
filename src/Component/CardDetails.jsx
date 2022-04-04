import * as React from 'react';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import './cardDetails.css'
import { useState } from 'react';
import CardList  from './CardList';



export default function CardDetails(props) {

    const [item,setItem]=useState({
        showCardComponent:false,
        card:props.collection

        
    })
    React.useEffect(()=>{

        setItem({
            ...item,
            card:props.collection
        })
    },[props.collection])
  

    // const showCard=()=>{
    //     setItem({
    //         ...item,
    //         showCardComponent:true
    //     })
    // }
  return (
   <div className='container'>
       <div className='center'>
       <label className='label'>List of Credit Cards</label>
       <div className='button'>
       <Button  size="small" variant="contained" onClick={()=>props.toggleShowCard(false)}>Add Card</Button>
       </div>

    <>
    {
        item&&item.card.map((item,index)=>{
            return <div>
                <CardList item={item} index={index} toggleShowCard={props.toggleShowCard} deleteCard={props.deleteCard}></CardList>
            </div>
        })
    }
    </>
    
       </div></div>
  );
}