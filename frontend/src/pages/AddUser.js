import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import "../globalStyles/styles.css"
function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  // handle form submission
  const handleAddUser = async (e) => {
    e.preventDefault();

    // Construct user data
    const newUser = {
      name,
      email,
      dob,
    };

    try {
      // Make a POST request to add the user in backendd
      await axios.post("http://localhost:5000/adduser", newUser);

      // Redirect to  user list after successfull add
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <Box
      component="form"
      className="data-card"
      onSubmit={handleAddUser}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        boxShadow: 3,
        borderRadius: 2,
        mt:6,
        mb:20
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add New User
      </Typography>
      
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      
      <TextField
        
        variant="outlined"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Add User
      </Button>
    </Box>
  );
}

export default AddUser;
