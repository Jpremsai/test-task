import { Button,ButtonGroup,FormControl,FormLabel,Input } from '@chakra-ui/react';
import React from 'react'

function Form({hanldeClick,form,date,setDate, handleChange,handleSubmit}) {
  return (
    <div className='form'> 
    <FormControl p='5'>
    <header style={{fontWeight:'bold', textDecoration:'underline'}}>Receipt Details</header>
    <FormControl isRequired display='flex' justifyContent='space-between' m='10'>
      <FormLabel>Date</FormLabel>
      <Input type='date' value={date} name='date' onChange={handleChange} placeholder=' Enter Date' />
    </FormControl>
    <FormControl isRequired display='flex' justifyContent='space-between'  m='10'>
      <FormLabel>Amount</FormLabel>
      <Input type='number' name='amount' value={form.amount} onChange={handleChange} placeholder='Enter Amount in INR' />
      </FormControl>
    <FormControl isRequired display='flex' justifyContent='space-between' m='10'>
      <FormLabel>Payment</FormLabel>
      <select onChange={handleChange} name='payment'>Select Method
        <option value='cash'>Cash</option>
        <option value='cheque'>Cheque</option>
        <option value='upi or wallets'>UPI or Wallets</option>
      </select>
    </FormControl>
    <FormControl display='flex' justifyContent='space-between'  m='10'>
      <FormLabel>Remarks</FormLabel>
      <Input type='text' name='remarks' placeholder='Enter Remarks' value={form.remarks} onChange={handleChange} />
    </FormControl>
    <ButtonGroup>
        <Button color='white' border='none' bg='red' display='flex' flexDirection='column' onClick={hanldeClick}>Cancel<span>Esc</span></Button>
        <Button color='white' border='none' bg='green' size='lg' display='flex' flexDirection='column' onClick={handleSubmit}>Submit<span> (W + s)</span></Button>
    </ButtonGroup>
    </FormControl>
    </div>
  )
}

export default Form