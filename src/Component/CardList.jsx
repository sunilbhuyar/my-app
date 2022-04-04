import * as React from 'react';
import './cardList.css'
import Button from '@mui/material/Button';





export default function CardList(props){

    return<div className='card'>  
  <div style={{float:'right'}}><Button size="small" variant="contained" onClick={()=>props.toggleShowCard(false,props.item)}>Edit Card</Button></div>

  <div style={{float:'right',clear:'both'}}><Button size="small"  variant="contained" onClick={()=>props.deleteCard(props.index)}>Delete Card</Button></div>
       <div>Customer Name: {props.item.customerName}</div>

       <div>Card Number: {props.item.cardNumber}</div>
       <div>CVV: {props.item.cvv}</div>
       <div>Validity: {props.item.validity}</div>
       
        

    </div>

}