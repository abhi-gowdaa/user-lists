import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Input,Card, Button } from '@mui/material'
import "../globalStyles/styles.css"
import  axios  from 'axios';

const UpdateUser = () => {
    const {id}=useParams()
    const navigate=useNavigate()
     
    const [name,setName]=useState("")
    const handleSubmit=async()=>{
      if(name){
        await axios.patch("http://localhost:5000/updateuser",{_id:id,name:name})
        navigate("/")
      }
    }


  return (
    <Box
    className="data-card"
    component="section"
    sx={{
      p: 2,
      m: "auto",
      mt: "20px",
      overflow: "hidden",
      mb: "500px",
      maxWidth: "60rem",
      height: "200px",
      borderRadius: "25px",
      color: "#000",
      alignContent:"center",
      
    }}
  >
    <Card 
    sx={{
        m:"auto",
      p:3,
      maxWidth:"300px",
      alignContent:"center",
      color:"#fff",
      backgroundColor:"#000",
      borderRadius:"10px"
    }}>
    <h3>Update User Name</h3>
   <Input sx={{backgroundColor:"#fff" ,borderRadius:"10px",margin:"5px",p:"4px"}} type='text' required placeholder='enter new name ' onChange={(e)=>setName(e.target.value)} />
   <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Card>
    
  </Box>
  )
}
 

export default UpdateUser