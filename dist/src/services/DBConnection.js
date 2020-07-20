"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.getInstance = function () {
        if (Database.instance == null) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    Database.prototype.connect = function (app) {
        mongoose_1.default.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () {
            app.listen(process.env.PORT || 3333, function () {
                console.log("The app is up and running on : http://localhost:" + (process.env.PORT || 3333) + "/");
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    return Database;
}());
exports.default = Database;
