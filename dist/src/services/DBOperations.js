"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NoteModel_1 = __importDefault(require("../models/NoteModel"));
var insert = function (note) { return new NoteModel_1.default(note).save(); };
var selectAllRecords = function () { return NoteModel_1.default.find(); };
var selectOne = function (targetObj) { return NoteModel_1.default.findOne(targetObj); };
var selectMany = function (targetObj) { return NoteModel_1.default.find(targetObj); };
var selectById = function (id) { return NoteModel_1.default.findById(id); };
var updateAll = function (targetObj, newObj) { return NoteModel_1.default.updateMany(targetObj, newObj); };
var updateOne = function (targetObj, newObj) { return NoteModel_1.default.findOneAndUpdate(targetObj, newObj); };
var updateById = function (id, newObj) { return NoteModel_1.default.findByIdAndUpdate(id, newObj); };
var deleteAll = function (targetObj) { return NoteModel_1.default.deleteMany(targetObj); };
var deleteOne = function (targetObj, newObj) { return NoteModel_1.default.findOneAndDelete(targetObj, newObj); };
var deleteById = function (id, newObj) { return NoteModel_1.default.findByIdAndDelete(id, newObj); };
exports.default = {
    insert: insert,
    selectAllRecords: selectAllRecords,
    selectOne: selectOne,
    selectMany: selectMany,
    selectById: selectById,
    updateAll: updateAll,
    updateOne: updateOne,
    updateById: updateById,
    deleteAll: deleteAll,
    deleteOne: deleteOne,
    deleteById: deleteById
};
