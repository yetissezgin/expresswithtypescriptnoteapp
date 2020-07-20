import express, {Application,Request,Response} from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import Database from './src/services/DBConnection';
import dbOperations from "./src/services/DBOperations";


dotenv.config();

const app:Application = express();
Database.getInstance().connect(app);
app.use(cors());
app.use(express.json())
app.get("/",(req:Request, res:Response)=>{
    console.log(process.env.PORT)
    res.send("denem")
})

app.post("/note",(req:Request,res:Response)=>{
    dbOperations.insert(req.body)
        .then(result=>{res.send(result);})
        .catch(()=>{res.status(500).send({status:"error"});})
})
app.get("/note",(req:Request,res:Response)=>{
    dbOperations.selectAllRecords()
        .then(result=>{res.send(result);})
        .catch(()=>{res.status(500).send({status:"error"});})
})
