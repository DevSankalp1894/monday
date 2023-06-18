  const express = require("express");
  const app = express();
  const connection = require("./connection/connection");
  const userRouter = require("./Routes/user.router")
  app.use(express.json());

  app.use("/user" , userRouter);

  app.listen(3000 , async() => {
     try{
         await connection;
         console.log("connected to DB");
     }

     catch(err){
          console.log(err.message);
     }
      console.log("server is running on port 3000")
  })