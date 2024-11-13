const express=require('express')
const mongoose=require('mongoose')
const connectDB=require('./db')
const cors = require('cors');

connectDB()

const app = express();
app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const userSchemas=mongoose.Schema({
    name:String,
    email:String,
    dob:Date
})

const Userdb=mongoose.model('userdb',userSchemas)

//fetch user from db
app.get("/",async (req,res)=>{
    try{
        const user=await Userdb.find()
        if(user.length>0){
           res.send(user) 
        }
        else{
           res.send("add users")
        }
    }catch(err){
        res.send(err)
    }
})

//add new user to db
app.post("/adduser",async(req,res)=>{
  const {name,email,dob}=req.body
  try{

      await Userdb.create({name:name.toLowerCase(),email:email.toLowerCase(),dob:dob})
      const user=await Userdb.find()
      res.send(user)
  }
  catch(err){
    res.send(err)
  }

})

// update user
app.patch("/updateuser",async(req,res)=>{
    const {_id,name}=req.body
    try {
       
        const updatedUser = await Userdb.findByIdAndUpdate(
            _id,
            { $set: { name: name } },
            { new: true }  
        );
        
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }
 
        res.send(updatedUser);
    } catch (err) {
        res.status(500).send({ message: "Error updating user", error: err });
    }
  })

// delete user
  app.delete("/deleteuser", async (req, res) => {
    const { _id } = req.query;   
    try {
        const deletedUser = await Userdb.deleteOne({ _id: _id });

        if (!deletedUser.deletedCount) {   
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: "Error deleting user", error: err });
    }
});


//server setup
app.listen("5000",()=>{
    console.log("server running on port 5000");
})


