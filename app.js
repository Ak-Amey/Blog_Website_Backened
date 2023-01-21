import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from './routes/blog-routes';

const app=express();

app.use(express.json());
app.use("/api/user",router);//middleware
app.use("/api/blog",blogRouter);//midddleware
mongoose.connect(
    'mongodb+srv://admin:dN6cAu7YcI6afVcI@cluster0.7gnyqmw.mongodb.net/?retryWrites=true&w=majority'
    ).then(()=>  app.listen(5000))
    .then(()=>console.log("Connected to database listening to port 5000"))
    .catch((err)=>console.log(err));
  



//password
//dN6cAu7YcI6afVcI