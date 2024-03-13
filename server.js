import app from './app.js';
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
  

//config 
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "config/config.env" });
}


//connecting database
connectDatabase();




app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });