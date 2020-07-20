import Model from "../models/NoteModel";
import {Note} from "../models/Note";

const insert = (note:Note) => new Model(note).save();
const selectAllRecords = () => Model.find();
const selectOne = (targetObj:any) => Model.findOne(targetObj)
const selectMany = (targetObj:any) => Model.find(targetObj)
const selectById = (id:any) => Model.findById(id);

const updateAll = (targetObj:any, newObj:any) => Model.updateMany(targetObj, newObj);
const updateOne = (targetObj:any, newObj:any) => Model.findOneAndUpdate(targetObj, newObj);
const updateById = (id:any, newObj:any) => Model.findByIdAndUpdate(id, newObj);

const deleteAll = (targetObj:any) => Model.deleteMany(targetObj);
const deleteOne = (targetObj:any, newObj:any) => Model.findOneAndDelete(targetObj, newObj);
const deleteById = (id:any, newObj:any) => Model.findByIdAndDelete(id, newObj);



export default {
     insert,

     selectAllRecords,
     selectOne,
     selectMany,
     selectById,

     updateAll,
     updateOne,
     updateById,

     deleteAll,
     deleteOne,
     deleteById
}