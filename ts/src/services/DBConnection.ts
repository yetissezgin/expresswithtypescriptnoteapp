import Mongoose from "mongoose";
import * as dotenv from "dotenv";
import {Application} from "express";
dotenv.config();

export default class Database {
    private static instance:Database;
    private constructor(){}

    public static getInstance(){
        if (Database.instance==null) { Database.instance=new Database();}
        return Database.instance;
    }

    public connect(app:Application) {
        Mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            app.listen(process.env.PORT || 3333,()=>{
                console.log(`The app is up and running on : http://localhost:${process.env.PORT || 3333}/`)
            })
       })
       .catch((err:any) => console.log(err));
    }
}
