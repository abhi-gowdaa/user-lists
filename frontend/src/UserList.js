import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import "./globalStyles/styles.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/");
    setUsers(response.data);
    console.log(response.data);
  };

  // Delete user function
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/deleteuser?_id=${id}`).then(() => {
      setUsers(users.filter((user) => user._id !== id));
    });
  };

  return (
    <Box
      className="data-card"
      component="section"
      sx={{
        p: 2,
        m: "auto",
        mt: "20px",
        overflow: "auto",
        mb: "10px",
        maxWidth: "60rem",
        height: "530px",
        borderRadius: "25px",
        color: "#000",
        
      }}
    >
      <Typography variant="h2" gutterBottom>
        User List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Date of Birth</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{new Date(user.dob).toDateString()}</TableCell>
                <TableCell align="center">
                  {/* Update Button */}
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/update/${user._id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  {/* Delete Button */}
                  <IconButton
                    color="secondary"
                    onClick={() => deleteUser(user._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserList;
