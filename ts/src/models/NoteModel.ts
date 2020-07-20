import * as mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    }
})
const noteModel = mongoose.model("notes", noteSchema);

export default noteModel;
