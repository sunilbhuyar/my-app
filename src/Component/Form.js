import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './cardDetails.css'
import './form.css'
import { useState } from 'react';

export default function BasicTextFields(props) {
  const[card,setCard]=useState(props.editCard?props.editCard:{})

  

  const setCardDetails=(ev,key)=>{

    setCard({
      ...card,
      [key]:ev.target.value
    })

  }
  return (
    <div className='container width'>
      <div className='center'>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Button  size="small" variant="contained" onClick={()=>props.toggleShowCard(true)}>Back</Button>
        <Button  size="small" variant="contained" onClick={()=>validation()}>Save</Button>
      <TextField id="outlined-basic" required={true}  value={card.customerName?card.customerName:undefined}   onChange={(ev)=>{setCardDetails(ev,'customerName')}} label="Customer Name" variant="outlined" />
      <TextField id="filled-basic" required={true}  value={card.cardNumber?card.cardNumber:undefined}  onChange={(ev)=>{setCardDetails(ev,'cardNumber')}} label="Card Number" variant="filled" />
      <TextField id="standard-basic" required={true}  value={card.cvv?card.cvv:undefined} onChange={(ev)=>{setCardDetails(ev,'cvv')}}  label="CVV" variant="standard" />
      <TextField id="standard-basic"  required={true}  value={card.validity?card.validity:undefined} onChange={(ev)=>{setCardDetails(ev,'validity')}}  label="Validity" variant="standard" />
    </Box>
      </div>
    
    </div>
  );

  function validation(){

    if(card&&card.customerName&&card.cardNumber&&card.cvv&&card.validity){
      props.setItemCollection(card)
    }
    else{
      alert('Please fill the required fields')
    }

  }
}