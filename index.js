import express, { urlencoded } from "express" 
import { Connection } from "./database/db.js";
import cors from "cors"
import todoRouter from "./routes/router.js";
const app =  express();
 app.use(cors())
 app.use(express.json())
const PORT=  8000;
Connection()


 //this is alos working

app.use("/", todoRouter)
app.use(express.urlencoded({extended:true}))
app.listen(PORT, ()=> console.log("server is runnig in 8000 port"))